import {  Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit  {
  words: string[] = [
    "Angular Developer",
    "Frontend Developer",
    "Figma Designer",
    "Flutter Developer",
  ];

  



  aboutText=[
  {
    "option":"Full Name",
    "answer":"AunKumar R"
  },
  {
    "option":"DOB",
    "answer":"06 June 2002  "
  },
  {
    "option":"Experience",
    "answer":"2.5 years"
  },
  {
    "option":"Address",
    "answer":"Tirupur"
  },
  {
    "option":"Freelance",
    "answer":"Available"
  },
  {
    "option":"Phone",
    "answer":"+91 96988 77357"
  },
  {
    "option":"Email",
    "answer":"arunrock1264708@gmail.com"
  },
  ]
  
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
