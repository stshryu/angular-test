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
        // Projects to be displayed on Dashboard (Repo ID from github)
        const favoriteProjectID = [111187026, 92342671, 48381471];
        var favoriteProjects = [];
        // Iterate through projects and return favorite projects
        for(var i = 0; i < projects.length; i++){
            for(var j = 0; j < favoriteProjectID.length; j++){
                if(projects[i].id == favoriteProjectID[j]){
                    favoriteProjects.push(projects[i]);
                    break;
                }
            }
        }
        return favoriteProjects;
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = this.sortFavoriteProject(projects));
    }
}
