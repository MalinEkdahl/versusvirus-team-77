import { Component, OnInit, Input } from '@angular/core';
import { CarbonCalculatorService } from '../carbon-calculator.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  showMobilityFeedback = false;
  showTravelFeedback = false;

  constructor(public carbonCalculator: CarbonCalculatorService) {
    this.carbonCalculator.calculateAll();
  }

  getAfterWidth(values: {before: number, after: number}) {
    const total = (values.before + values.after);
    const result = values.after / total * 100;
    return {'width': result + "%"};
  }

  getBeforeWidth(values: {before: number, after: number}) {
    const total = (values.before + values.after);
    const result = values.before / total * 100;
    return {'width': result + "%"};
  }

  ngOnInit(): void {
  }

}
