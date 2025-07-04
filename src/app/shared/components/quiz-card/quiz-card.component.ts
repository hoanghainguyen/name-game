import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent {
  @Input() question: string = '';
  @Input() correctAnswer: string = '';
  @Input() hint: string = '';
  answer = new FormControl('');
  result: string = '';
  score: number = 0;
  showHint: boolean = false;

  private correctSound = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
  private wrongSound = new Audio('https://www.soundjay.com/buttons/sounds/button-2.mp3');

  checkAnswer() {
    const userAnswer = this.answer.value?.toLowerCase().trim();
    if (userAnswer === this.correctAnswer.toLowerCase()) {
      this.result = 'Yay, you got it!';
      this.score++;
      this.correctSound.play();
    } else {
      this.result = 'Oops, try again!';
      this.wrongSound.play();
    }
    this.showHint = false;
  }

  displayHint() {
    this.showHint = true;
  }
}
