import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

    aboutMe = `Welcome to my homepage, my name is Steve and I've been working as
    a Full Stack Developer, freelance developer, IT specialist and contractor
    for the past couple of years. I've worked on a variety of web platforms and programs, and
    have written in multitudes of languages, ranging from Angular 5 (which this site
    is written in!) to Python. You'll find my favorite projects below, feel free to click
    around and look at the things I've worked on!
    `;

	constructor() { }

	ngOnInit() {
	}

}
