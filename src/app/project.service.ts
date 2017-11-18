import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProjectService {

	constructor(private messageService: MessageService) { }

	getProject(id: number): Observable<Project> {
        this.messageService.add(`HeroService: Fetched hero id=${id}`);
        return of(PROJECTS.find(project => project.id === id));
    }

	getProjects(): Observable<Project[]> {
		this.messageService.add('ProjectService: fetched projects');
		this.messageService.add('Help, I am stuck in this website');
		return of(PROJECTS);
	}

}
