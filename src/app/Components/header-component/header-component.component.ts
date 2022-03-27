import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //handles the menu navigation links for the small screens
  handleToggleBtnClick() {
    let navList = document.querySelector(".navigation-list");
    if(navList)
      navList.classList.toggle("active");
  }

}
