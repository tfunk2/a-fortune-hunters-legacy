import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "A Fortune Hunter's Legacy";
  isKeypadLocked: boolean = true;
  correctCombination: number[] = [2, 4, 3, 6];
  currentComboAttempt: number[] = [];

  addSymbolToCombo(num) {
    if(this.currentComboAttempt.length <= 3) {
      this.currentComboAttempt = [...this.currentComboAttempt, num];
    }
  }

  submitCombo() {
    if(this.currentComboAttempt.join("") === this.correctCombination.join("")) {
      this.isKeypadLocked = false;
    } else {
      this.currentComboAttempt = [];
    }
  }
}
