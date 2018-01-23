import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	interests = `My interests include coding in a variety of languages, running and
	lifting weights, gaming (Dota 2 and Path of Exile), and cooking.`

    aboutMe = `Welcome to my homepage, my name is Steve and I've been working as
    a Full Stack Developer, freelance developer, IT specialist and contractor
    for the past couple of years. I've worked on a variety of web platforms and programs, and
    have written in multitudes of languages, ranging from Angular 2 (which this site
    is written in) to Python. I'm currently working on a multitude of machine learning scripts
	using scikit-learn and OpenCV. I'm also working on a game using the Monogame framework
	written in C#. I also maintain a Discord bot in my spare time, if you'd like to check
	it out click on Steebot below, otherwise feel free to click on some of my other
	favorite projects!
    `;

	constructor() { }

	ngOnInit() {
	}

}
