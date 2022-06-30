import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent {
  input = 0;
  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}

  onChange(newValue: any) {
    this.input = newValue;
    this.calculateService.setValue(newValue);
  }
}
