import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from './project';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProjectService {

	constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private githubUrl = 'https://api.github.com/users/stshryu/repos';

	getProject(name: string): Observable<Project> {
        const projectUrl =`https://api.github.com/repos/stshryu/${name}`;
        return this.http.get<Project>(projectUrl)
            .pipe(
                tap(_ => this.log(`fetched project name=${name}`)),
                catchError(this.handleError<Project>(`getProject name=${name}`))
        );
    }

	getProjects(): Observable<Project[]> {
		this.messageService.add('ProjectService: fetched projects');
		this.messageService.add('Help, I am stuck in this website');
		return this.http.get<Project[]>(this.githubUrl)
            .pipe(
                tap(projects => this.log(`fetched heroes`)),
                catchError(this.handleError('getProjects', []))
        );
	}

    private log(message: string) {
        this.messageService.add('ProjectService: ' + message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }
}
