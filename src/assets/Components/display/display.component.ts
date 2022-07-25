import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'asset-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

	@Input() calculationString: string = "";
	@Input() actualNumber: string = "";

	constructor() { }

	ngOnInit(): void {
	}
}
