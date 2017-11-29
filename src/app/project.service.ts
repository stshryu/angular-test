
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Project } from './project';
import { ProjectCommit } from './projectCommit';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, retryWhen, filter, delay, take } from 'rxjs/operators';

@Injectable()
export class ProjectService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private githubUrl = 'https://api.github.com/users/stshryu/repos';

    getProjectCommitHistory(name: string): Observable<ProjectCommit[]> {
        this.clear();
        const commitHistoryUrl = `https://api.github.com/repos/stshryu/${name}/stats/commit_activity`
        return this.http.get<ProjectCommit[]>(commitHistoryUrl, { observe: 'response' })
            .pipe(
                map((res: HttpResponse<ProjectCommit[]>) => {
                    if (res.status == 202) {
                        throw res.status;
                        // setTimeout(this.throw202Error, 3000);
                    }
                    return res.body;
                }),
                tap(_ => this.log(`Fetched commit history for project name=${name}`)),
                retryWhen(error => error
                    .pipe(
                        map(res => {
                            if (res == 202)
                                return res;
                            throw res;
                        }),
                        delay(3000),
                        take(3)
                    )
                ),
                catchError(this.handleError<ProjectCommit[]>(`commitHistory name=${name}`)),
            );
    }

    // throw202Error(res: HttpResponse<ProjectCommit[]>): void {
    //     throw res.status;
    // }

    getProject(name: string): Observable<Project> {
        this.clear();
        const projectUrl = `https://api.github.com/repos/stshryu/${name}`;
        return this.http.get<Project>(projectUrl)
            .pipe(
            tap(_ => this.log(`Fetched project name=${name}`)),
            catchError(this.handleError<Project>(`getProject name=${name}`))
            );
    }

    getProjects(): Observable<Project[]> {
        this.clear();
        this.messageService.add('ProjectService: fetched projects');
        return this.http.get<Project[]>(this.githubUrl)
            .pipe(
            tap(projects => this.log(`fetched projects`)),
            catchError(this.handleError('getProjects', []))
            );
    }

    private log(message: string) {
        this.clear();
        this.messageService.add('ProjectService Log: ' + message);
    }

    private clear() {
        this.messageService.clear();
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }
}
