import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone:true,
  imports: [],
  styleUrl: './calculator-button.component.scss',
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //encapsulation: ViewEncapsulation.None,
  host: {
    class: "border-r border-b border-indigo-400",
    '[class.w-1/4]': '!isEqual()',
    '[class.w-2/4]': 'isEqual()'
  }
})
export class CalculatorButtonComponent {
  public isCommand = input(false,
    {
      transform: (value: boolean | string ) =>
        typeof value === 'string' ? value === '' : value

    }
  );

  public isEqual = input(false,
    {
      transform: (value: boolean | string ) =>
        typeof value === 'string' ? value === '' : value

    }
  );

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // };


}
