import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10; // Add shadow when scrolled down
  }

  changeActive(active:number){
    this.active = active;
  }

  navLink=[
    {'name':'Home', 'link':'hero', 'active':0},
    {'name':'About', 'link':'about', 'active':1},
    {'name':'Services', 'link':'service', 'active':2},
    {'name':'Portfolio', 'link':'Working', 'active':3},
    {'name':'Contact', 'link':'contact', 'active':4} 
  ]

}
