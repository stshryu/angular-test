import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	@Output() detailedProjectName: EventEmitter<string> = new EventEmitter<string>();
	isShowing: boolean = false;

	private name: string = '';

    projects: Project[] = [];

	constructor(private projectService: ProjectService) { }

	ngOnInit() {
        this.getProjects();
	}

    sortFavoriteProject(projects: Project[]): Project[]{
        const favoriteProjectID = [111187026, 92342671, 115966609];
        return projects.filter(val => favoriteProjectID.includes(val.id));
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = this.sortFavoriteProject(projects));
    }

	getDetailedProject(name: string){
		if(this.name == name){
			this.name = '';
			this.detailedProjectName.emit('');
			this.isShowing = false;
		} else {
			this.name = name;
			this.detailedProjectName.emit(name);
			this.isShowing = true;
		}
	}
}
