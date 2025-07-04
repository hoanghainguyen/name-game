import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatToolbarModule],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent {
  @Input() question: string = '';
  @Input() correctAnswer: string = '';
  answer = new FormControl('');
  result: string = '';

  checkAnswer() {
    const userAnswer = this.answer.value?.toLowerCase().trim();
    this.result = userAnswer === this.correctAnswer.toLowerCase() ? 'Yay, you got it!' : 'Oops, try again!';
  }
}