import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone:true,
  imports: [],
  styleUrl: './calculator-button.component.scss',
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "w-1/4 border-r border-b border-indigo-400"
  }
})
export class CalculatorButtonComponent {
  public isCommand = input(false,
    {
      transform: (value: boolean | string ) =>
        typeof value === 'string' ? value === '' : value

    }
  );

  @HostBinding('class.is-command') get commandStyle() {
    return this.isCommand();
  };


}
