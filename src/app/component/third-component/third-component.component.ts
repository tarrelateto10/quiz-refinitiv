import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss'],
})
export class ThirdComponentComponent implements OnInit {
  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}

  result() {
    return this.calculateService.getResult();
  }
}
