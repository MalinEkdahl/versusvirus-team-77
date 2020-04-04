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

}
