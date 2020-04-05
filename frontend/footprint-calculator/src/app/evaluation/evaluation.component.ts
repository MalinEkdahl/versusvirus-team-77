import { Component, OnInit, Input } from '@angular/core';
import { CarbonCalculatorService } from '../carbon-calculator.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  constructor(public carbonCalculator: CarbonCalculatorService) { }

  ngOnInit(): void {
  }

}
