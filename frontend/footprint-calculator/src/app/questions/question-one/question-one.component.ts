import { Component, OnInit } from '@angular/core';
import { CarbonCalculatorService } from 'src/app/carbon-calculator.service';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.sass']
})
export class QuestionOneComponent implements OnInit {
  constructor(public carbonCalculator: CarbonCalculatorService) { }

  ngOnInit(): void {
  }

}
