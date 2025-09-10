import { Injectable, signal } from '@angular/core';

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operators = ['+','-','x', '÷'];
const specialOperators = ['+/-', '%', '.', '=', 'C', 'Backspace'];

@Injectable({
  providedIn: 'root' //de manera global
})
export class CalculatorService {
  public resultText = signal('0');
  public subResultText = signal('0');
  public lastOperator = signal('+');


  public constructNumber( value: string): void {
    //Validar input
    if(![...numbers, ...operators, ...specialOperators].includes(value)){
      console.log('Invalid Input', value);
      return;
    }
    // =
    if(value === '='){
      console.log('Calcular resultado');
      this.calculateResult();
      return;
    }

    // C
    if(value === 'C'){
      console.log('Limpiar cálculo');
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperator.set('+');
      return;
    }

    // Backspace
    if( value === 'Backspace'){
      console.log('Empezar a eliminar');
      // Comprobar condiciones para eliminar números
      if(this.resultText() === '0') return;
      if(this.resultText().includes('-') && this.resultText().length === 2){
        this.resultText.set('0');
        return;
      }
      if(this.resultText() === '-0') {
        this.resultText.set('0');
        return;
      };
      if(this.resultText().length === 1) this.resultText.set('0');

      this.resultText.update((prevValue) => prevValue.slice(0, -1));
      return;
    }

    //Aplicar operadores

    if(operators.includes(value)){
      this.calculateResult();
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    // Limitar num carácteres

    if(this.resultText().length >= 10){
      console.log('Max length reached');
    }

    // Validar punto decimal

    if( value === '.' && !this.resultText().includes('.') ){
      if(this.resultText() === '0' || this.resultText() === ''){
        this.resultText.set('0.');
        return;
      }
        this.resultText.update((text)=> text +'.');
        return;
    }

    // Condiciones especiales para el 0
    if( value === '0' && (this.resultText() === '0' || this.resultText() === '-0')){
      return;
    }

    // Cambiar signo

    if( value === '+/-') {
      if(this.resultText().includes('-')) {
        this.resultText.update(text => text.slice(1));
        return;
      }

      this.resultText.update(text => `-${text}`);
      return;
    }

    // Números
    if(numbers.includes(value)) {
      if(this.resultText() === '0' || this.resultText() === '-0'){
        if(this.resultText().includes('-')){
          this.resultText.set('-'+value);
          return;
        }
        this.resultText.set(value);
        return;
      }
    }

    this.resultText.update((prev) => prev + value);




  }

  //TODO POR AQUI
  private calculateResult() {
    const num1 = parseFloat(this.subResultText());
    const num2 = parseFloat(this.resultText());
    let result = 0;

    switch(this.lastOperator()){
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '÷':
        result = num1 / num2;
        break;
    }

    this.resultText.set(result.toString());
    this.subResultText.set('0');


  }

}
