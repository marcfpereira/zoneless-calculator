import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, OnInit, output, viewChild, ViewEncapsulation } from '@angular/core';

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
  public onClick = output<string>();
  public contentValue  = viewChild<ElementRef<HTMLButtonElement>>('button');

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

  handleClick(){
    const element = this.contentValue()?.nativeElement;
    if(!element){
      return;
    }
    this.onClick.emit(element.innerText.trim());
  }

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // };


}
