import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "A Fortune Hunter's Legacy";
  isKeypadLocked: boolean = true;
  isKeypadBeingUnlocked: boolean = false;
  correctCombination: number[] = [0, 7, 4, 2];
  currentComboAttempt: number[] = [];

  addSymbolToCombo(num) {
    if(this.currentComboAttempt.length <= 3) {
      this.currentComboAttempt = [...this.currentComboAttempt, num];
    }
  }

  clearCombo() {
    this.currentComboAttempt = []
  }

 submitCombo() {
    if(this.currentComboAttempt.join("") === this.correctCombination.join("")) {
      this.isKeypadBeingUnlocked = true;
      this.currentComboAttempt = [];
      setTimeout(() => {
        
      }, 1000);
      setTimeout(() => {
        this.isKeypadLocked = false;
      }, 2000);
    } else {
      this.currentComboAttempt = [];
    }
  }

  whichMusicNote(currentNum) {
    switch(currentNum) {
      case 1:
        return "../assets/music-note-pngs/bass-clef.png";
      case 2:
        return "../assets/music-note-pngs/beam.png";
      case 3:
        return "../assets/music-note-pngs/eighth-note.png";
      case 4:
        return "../assets/music-note-pngs/half-note.png";
      case 5:
        return "../assets/music-note-pngs/quarter-note-rest.png";
      case 6:
        return "../assets/music-note-pngs/quaver.png";
      case 7:
        return "../assets/music-note-pngs/sixteenth-note.png";
      case 8:
        return "../assets/music-note-pngs/tie.png";
      case 9:
        return "../assets/music-note-pngs/triplet.png";
      case 0:
        return "../assets/music-note-pngs/treble-clef.png";
    }
  }
}
