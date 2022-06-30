import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss'],
})
export class SecondComponentComponent implements OnInit {
  selectedValue = 'isPrime';

  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}

  onChange(newValue: any) {
    this.selectedValue = newValue;
    this.calculateService.setCondition(this.selectedValue);
  }
}
