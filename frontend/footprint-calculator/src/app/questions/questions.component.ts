import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public showQuestions: boolean[] = [true, false];

  constructor() { }

  ngOnInit(): void {
  }

  showQuestion() {
    for (let i = 0; i < this.showQuestions.length; i++) {
      if (this.showQuestions[i]) {
        this.showQuestions[i + 1] = true;
        this.showQuestions[i] = false;
        break;
      }
    }
  }
}
