import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	operators = ["+", "-", "*", "/"];
	brackets = ["(", ")"];

	title = 'calculator';
	calculationString: string = "0";
	actualNumber: string = "";
	result: number = 0;

	mapButtonValueToFunction(value: any) {
		if (this.numbers.includes(value)) this.getNumber(value);
		if (this.operators.includes(value)) this.getOperator(value);
		if (this.brackets.includes(value)) this.getBracket(value);
		if (value === ",") this.getComma();
		if (value === "=") this.calculate();
		if (value === "<-") this.clear();
		if (value === "CE") this.clearAll();
	}

	getNumber(number: number) {
		this.setZeroBeforeComma();
		if (!this.lastCharOfCalculationStringIsOperator() && !this.lastCharOfCalculationStringIsBracket()) this.calculationString = "0";
		if (this.actualNumber === "0") {
			this.actualNumber = number.toString();
		} else this.actualNumber = `${this.actualNumber}${number.toString()}`;
	}

	getOperator(operator: string) {
		if (this.calculationString[this.calculationString.length - 1] === "(" && this.actualNumber === "") return alert("Bitte erst eine Zahl eingeben");
		if (this.actualNumber === "" && this.lastCharOfCalculationStringIsOperator())
			this.clearLastCharOfCalculationString();
		if (this.calculationString === "0")
			this.calculationString = this.actualNumber + operator;
		else
			this.calculationString = this.calculationString + this.actualNumber + operator;
		this.actualNumber = "";
	}

	getComma() {
		if (this.actualNumber[this.actualNumber.length - 1] === ",")
			this.clear();
		if (this.actualNumber.includes(',')) return alert("Zu viele Kommas");
		this.actualNumber = this.actualNumber + ",";
	}

	getBracket(bracket: string) {
		if (bracket === "(" && this.lastCharOfCalculationStringIsNumber()) return alert("bitte erst einen Operator eingeben");
		if (bracket === "(" && this.actualNumber !== "") return alert("bitte erst die Zahl verwenden");
		if (bracket === "(")
			return this.calculationString = this.calculationString + bracket;
		if ((this.calculationString.match(/\(/) || []).length > (this.calculationString.match(/\)/) || []).length) {
			if (bracket === ")" && this.actualNumber === "" && !this.lastCharOfCalculationStringIsBracket()) return alert("bitte erst eine Zahl eingeben");
			this.calculationString = this.calculationString + this.actualNumber + bracket;
			this.actualNumber = "";
		}
	}

	calculate() {
		if ((this.calculationString.match(/\(/) || []).length > (this.calculationString.match(/\)/) || []).length) return alert("Bitte schließe alle Klammern");
		if (this.actualNumber === "" && this.lastCharOfCalculationStringIsOperator()) this.clearLastCharOfCalculationString();
		this.setZeroBeforeComma();
		this.calculationString = this.calculationString + this.actualNumber;
		this.result = eval(this.calculationString);
		this.calculationString = this.result.toString();
		this.actualNumber = "";
	}

	clear() {
		if (this.actualNumber.length > 0)
			this.actualNumber = this.actualNumber.slice(0, this.actualNumber.length - 1);
	}

	clearAll() {
		this.calculationString = "0";
		this.actualNumber = "";
		this.result = 0
	}

	lastCharOfCalculationStringIsOperator() {
		return this.operators.includes(this.calculationString[this.calculationString.length - 1]);
	}

	lastCharOfCalculationStringIsNumber() {
		return this.numbers.includes(this.calculationString[this.calculationString.length - 1]);
	}

	lastCharOfCalculationStringIsBracket() {
		return this.brackets.includes(this.calculationString[this.calculationString.length - 1]);
	}

	clearLastCharOfCalculationString() {
		this.calculationString = this.calculationString.slice(0, this.calculationString.length - 1);
	}

	setZeroBeforeComma() {
		if (this.actualNumber[0] === ",") this.actualNumber = "0" + this.actualNumber;
	}
}
