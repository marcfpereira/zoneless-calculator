import { ChangeDetectionStrategy, Component } from '@angular/core';
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
})
export class CalculatorComponent {

  handleClick(key: string){
    console.log(key);
  }
 }
