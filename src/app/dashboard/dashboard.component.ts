import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

    projects: Project[] = [];

	constructor(private projectService: ProjectService) { }

	ngOnInit() {
        this.getProjects();
	}

    sortFavoriteProject(projects: Project[]): Project[]{
        const favoriteProjectID = [111187026, 92342671, 48381471];        
        return projects.filter(val => favoriteProjectID.includes(val.id));
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = this.sortFavoriteProject(projects));
    }
}
