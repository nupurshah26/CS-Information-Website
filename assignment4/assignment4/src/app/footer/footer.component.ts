/* AUTHOR: Nupur Shah
    Footer component */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  masonlogo = 'assets/images/masonlogo.png'
  
  constructor() { }

  ngOnInit(): void {
  }

}
