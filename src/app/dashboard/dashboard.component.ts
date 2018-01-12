import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

	@Output() showDetailedProject: EventEmitter<string> = new EventEmitter<string>();

    projects: Project[] = [];

	constructor(private projectService: ProjectService) { }

	ngOnInit() {
        this.getProjects();
	}

    sortFavoriteProject(projects: Project[]): Project[]{
        const favoriteProjectID = [111187026, 92342671, 48381471, 115966609];
        return projects.filter(val => favoriteProjectID.includes(val.id));
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = this.sortFavoriteProject(projects));
    }

	getDetailedProject(name: string){
		this.showDetailedProject.emit(name);
	}
}
