import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "@/calculator/components/calculator/calculator.component";

@Component({
  selector: 'app-calculator-view',
  standalone:true,
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{

  }
})
export default class CalculatorViewComponent { }
