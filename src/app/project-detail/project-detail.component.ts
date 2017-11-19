import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css'],
})

export class ProjectDetailComponent implements OnInit {

    @Input() project: Project;

	constructor(
        private route: ActivatedRoute,
        private projectService: ProjectService,
        private location: Location
    ) { }

	ngOnInit() {
        this.getProject();
	}

    goBack(): void {
        this.location.back();
    }

    getProject(): void {
        const name = this.route.snapshot.paramMap.get('name');
        this.projectService.getProject(name).subscribe(project => this.project = project);
    }

}
