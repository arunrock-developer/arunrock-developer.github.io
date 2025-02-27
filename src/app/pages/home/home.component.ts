import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  words: string[] = ["Developer", "Designer", "App Developer"];
  currentWord: string = this.words[0];
  wordIndex: number = 0;
  
  constructor() {}
  
  ngOnInit(): void {
    this.startTypingEffect();
  }
  
  startTypingEffect(): void {
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 6000); // Change every 3 seconds to match animation
  }
  
}
