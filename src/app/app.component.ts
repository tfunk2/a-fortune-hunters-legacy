import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'The Legacy Continues...';
  isKeypadLocked: boolean = true;
  isKeypadBeingUnlocked: boolean = false;
  correctCombination: number[] = [0, 7, 4, 2];
  currentComboAttempt: number[] = [];
  alieneseImagePaths: string[] = [
    '../assets/alienese/a.png',
    '../assets/alienese/b.png',
    '../assets/alienese/c.png',
    '../assets/alienese/d.png',
    '../assets/alienese/e.png',
    '../assets/alienese/f.png',
    '../assets/alienese/g.png',
    '../assets/alienese/h.png',
    '../assets/alienese/i.png',
    '../assets/alienese/j.png',
    '../assets/alienese/k.png',
    '../assets/alienese/l.png',
    '../assets/alienese/m.png',
    '../assets/alienese/n.png',
    '../assets/alienese/o.png',
    '../assets/alienese/p.png',
    '../assets/alienese/q.png',
    '../assets/alienese/r.png',
    '../assets/alienese/s.png',
    '../assets/alienese/t.png',
    '../assets/alienese/u.png',
    '../assets/alienese/v.png',
    '../assets/alienese/w.png',
    '../assets/alienese/x.png',
    '../assets/alienese/y.png',
    '../assets/alienese/z.png',
  ];
  alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  buttonAudio = new Audio("../assets/sounds/buttonSound.mp3");
  unlockAudio = new Audio("../assets/sounds/unlockSound.mp3");
  errorAudio = new Audio("../assets/sounds/errorSound.mp3");

  async playButtonSound() {
    await this.buttonAudio.load();
    this.buttonAudio.play();
  }

  async playUnlockSound() {
    await this.unlockAudio.load();
    this.unlockAudio.play();
  }

  async playErrorSound() {
    await this.errorAudio.load();
    this.errorAudio.play();
  }

  addSymbolToCombo(num) {
    this.playButtonSound()
    if (this.currentComboAttempt.length <= 3) {
      this.currentComboAttempt = [...this.currentComboAttempt, num];
    }
  }

  clearCombo() {
    this.currentComboAttempt = [];
    this.playButtonSound()
  }

  submitCombo() {
    if (
      this.currentComboAttempt.join('') === this.correctCombination.join('')
    ) {
      this.isKeypadBeingUnlocked = true;
      this.currentComboAttempt = [];
      setTimeout(() => {}, 1000);
      setTimeout(() => {
        this.isKeypadLocked = false;
      }, 2000);
      this.playUnlockSound();
    } else {
      this.currentComboAttempt = [];
      this.playErrorSound();
    }
  }

  whichMusicNote(currentNum) {
    switch (currentNum) {
      case 1:
        return '../assets/music-note-pngs/beam.png';
      case 2:
        return '../assets/music-note-pngs/triplet.png';
      case 3:
        return '../assets/music-note-pngs/eighth-note.png';
      case 4:
        return '../assets/music-note-pngs/half-note.png';
      case 5:
        return '../assets/music-note-pngs/quarter-note-rest.png';
      case 6:
        return '../assets/music-note-pngs/quaver.png';
      case 7:
        return '../assets/music-note-pngs/sixteenth-note.png';
      case 8:
        return '../assets/music-note-pngs/tie.png';
      case 9:
        return '../assets/music-note-pngs/quarter-note.png';
      case 0:
        return '../assets/music-note-pngs/treble-clef.png';
    }
  }

  whichLetter(currentImagePath) {
    switch (currentImagePath) {
      case '../assets/alienese/a.png':
        return 'a';
      case '../assets/alienese/b.png':
        return 'b';
      case '../assets/alienese/c.png':
        return 'c';
      case '../assets/alienese/d.png':
        return 'd';
      case '../assets/alienese/e.png':
        return 'e';
      case '../assets/alienese/f.png':
        return 'f';
      case '../assets/alienese/g.png':
        return 'g';
      case '../assets/alienese/h.png':
        return 'h';
      case '../assets/alienese/i.png':
        return 'i';
      case '../assets/alienese/j.png':
        return 'j';
      case '../assets/alienese/k.png':
        return 'k';
      case '../assets/alienese/l.png':
        return 'l';
      case '../assets/alienese/m.png':
        return 'm';
      case '../assets/alienese/n.png':
        return 'n';
      case '../assets/alienese/o.png':
        return 'o';
      case '../assets/alienese/p.png':
        return 'p';
      case '../assets/alienese/q.png':
        return 'q';
      case '../assets/alienese/r.png':
        return 'r';
      case '../assets/alienese/s.png':
        return 's';
      case '../assets/alienese/t.png':
        return 't';
      case '../assets/alienese/u.png':
        return 'u';
      case '../assets/alienese/v.png':
        return 'v';
      case '../assets/alienese/w.png':
        return 'w';
      case '../assets/alienese/x.png':
        return 'x';
      case '../assets/alienese/y.png':
        return 'y';
      case '../assets/alienese/z.png':
        return 'z';
    }
  }
}
