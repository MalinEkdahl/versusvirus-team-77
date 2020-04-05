import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'footprint-calculator';
  public showQuestions = false;
  public showEvaluation = false;

  showResult() {
    this.showQuestions = false;
    this.showEvaluation = true;
  }
}
