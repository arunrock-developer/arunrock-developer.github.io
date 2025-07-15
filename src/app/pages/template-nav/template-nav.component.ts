import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template-nav',
  templateUrl: './template-nav.component.html',
  styleUrls: ['./template-nav.component.scss']
})
export class TemplateNavComponent implements OnInit {
    isScrolled = false;

    // theme variable

    isDarkTheme:boolean=false;
    @Output() themeChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      this.isScrolled = window.scrollY > 10; // Add shadow when scrolled down
    }
    


    themeToggle(){
      this.isDarkTheme = !this.isDarkTheme
      this.themeChanged.emit(this.isDarkTheme)
    }
    



}
