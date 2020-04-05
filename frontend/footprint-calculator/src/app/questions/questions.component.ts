import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Output() endOfQuestions = new EventEmitter<boolean>();

  public showQuestions: boolean[] = [true, false];

  constructor() { }

  ngOnInit(): void {
  }

  backQuestion() {
    for (let i = 0; i < this.showQuestions.length; i++) {
      // We want the last question
      this.showQuestions[i - 1] = true;
      this.showQuestions[i] = false;
      break;
    }
  }

  showQuestion() {
    for (let i = 0; i < this.showQuestions.length; i++) {
      if (this.showQuestions[i]) {
        if (i === this.showQuestions.length - 1) {
          // we have reach the end of questions
          this.endOfQuestions.emit(true);
          break;
        } else {
          // We want the next question
          this.showQuestions[i + 1] = true;
          this.showQuestions[i] = false;
          break;
        }
      }
    }
  }
}
