import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  inputValue: number = 0;
  condition: string = 'isPrime';

  setValue(value: number) {
    this.inputValue = value;
  }

  setCondition(condition: string) {
    this.condition = condition;
  }

  getResult(): any {
    if (this.condition === 'isPrime') {
      return this.checkIsPrime(this.inputValue);
    } else if (this.condition === 'IsFibanacci') {
      return this.fibonacci(this.inputValue);
    }
  }

  checkIsPrime(value: number) {
    for (var i = 2; i < value; i++) if (value % i === 0) return false;
    return value > 1;
  }

  fibonacci(value: number, count = 1, last = 0): any {
    if (count < value) {
      return this.fibonacci(value, count + last, count);
    }
    if (count === value) {
      return true;
    }
    return false;
  }
}
