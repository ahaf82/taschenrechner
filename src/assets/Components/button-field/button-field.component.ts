import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'asset-button-field',
	templateUrl: './button-field.component.html',
	styleUrls: ['./button-field.component.scss']
})
export class ButtonFieldComponent implements OnInit {

	@Output() numberEmitter = new EventEmitter();
	@Output() operatorEmitter = new EventEmitter();
	@Output() commaEmitter = new EventEmitter();
	@Output() calculateEmitter = new EventEmitter();
	@Output() clearEmitter = new EventEmitter();
	@Output() clearAllEmitter = new EventEmitter();
	@Output() bracketEmitter = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	getNumber(number: number) {
		this.numberEmitter.emit(number);
	}

	operate(operator: string) {
		this.operatorEmitter.emit(operator);
	}

	getComma() {
		this.commaEmitter.emit()
	}

	getBracket(bracket: string) {
		this.bracketEmitter.emit(bracket);
	}

	calculate() {
		this.calculateEmitter.emit();
	}

	clear() {
		this.clearEmitter.emit();
	}

	clearAll() {
		this.clearAllEmitter.emit();
	}
}
