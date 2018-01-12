import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-detail-inline',
    templateUrl: './project-detail-inline.component.html',
    styleUrls: ['./project-detail-inline.component.css']
})
export class ProjectDetailInlineComponent implements OnInit {

    private _name: string = '';

    @Input()
    set projectName(name: string){
        this._name = name;
        console.log('project-detail');
        console.log(name);
        console.log(this._name);
    }

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(name: string){
        console.log(name);
    }
}
