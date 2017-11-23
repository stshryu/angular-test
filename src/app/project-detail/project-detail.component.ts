import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectCommit } from '../projectCommit';
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
    @Input() commits: ProjectCommit[];

	constructor(
        private route: ActivatedRoute,
        private projectService: ProjectService,
        private location: Location
    ) { }

	ngOnInit() {
        this.getProject();
        this.getActivity();
	}

    goBack(): void {
        this.location.back();
    }

    getRecentActivity(commits: ProjectCommit[]): ProjectCommit[]{
        var recentCommits = [];
        recentCommits = commits.slice(-2);
        return recentCommits;
    }

    getActivity(): void {
        const name = this.route.snapshot.paramMap.get('name');
        this.projectService.getProjectCommitHistory(name).subscribe(commits => this.commits = this.getRecentActivity(commits));
    }

    getProject(): void {
        const name = this.route.snapshot.paramMap.get('name');
        this.projectService.getProject(name).subscribe(project => this.project = project);
    }

}
