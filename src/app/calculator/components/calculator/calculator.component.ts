import { ChangeDetectionStrategy, Component, HostListener, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "./calculator-button/calculator-button.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'calculator',
  standalone:true,
  styleUrl: 'calculator.component.css',
  imports: [
    CalculatorButtonComponent,
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)':'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  handleClick(key: string){
    console.log(key);
  }

  handleKeyboardEvent(event: KeyboardEvent){

    const keyEquivalents: Record<string,string> = {
      Escape: 'C',
      Clear: 'C',
      '*':'x',
      '/': '÷',
      Enter: '='
    };

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;
    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button: CalculatorButtonComponent) => {
      button.keyboardPressedStyle(keyValue);
    });
  }

 }
