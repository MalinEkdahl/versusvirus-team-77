import { Component, OnInit } from '@angular/core';
import { CarbonCalculatorService } from 'src/app/carbon-calculator.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.sass']
})
export class QuestionTwoComponent implements OnInit {
  constructor(public carbonCalculator: CarbonCalculatorService) { }

  ngOnInit(): void {
  }

}
