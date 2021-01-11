/* AUTHOR: Nupur Shah
    Header component */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  masonlogo = 'assets/images/masonlogo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
