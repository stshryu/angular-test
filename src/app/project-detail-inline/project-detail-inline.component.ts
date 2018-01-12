import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-detail-inline',
    templateUrl: './project-detail-inline.component.html',
    styleUrls: ['./project-detail-inline.component.css']
})
export class ProjectDetailInlineComponent implements OnInit {

    @Input() projectName: string;

    constructor() { }

    ngOnInit() {
    }

    getProjectDetails(showDetailedProject: string){
        console.log(showDetailedProject);
    }
}
