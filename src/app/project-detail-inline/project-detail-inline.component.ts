import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-project-detail-inline',
    templateUrl: './project-detail-inline.component.html',
    styleUrls: ['./project-detail-inline.component.css']
})
export class ProjectDetailInlineComponent implements OnInit {

    private _name: string = '';
    private toggleShowing: boolean = false;

    @Input()
    set projectName(name: string){
        this._name = name;
        this.showDetailedProject(this._name);
    }

    constructor() { }

    ngOnInit() {
    }

    showDetailedProject(name: string){

    }
}
