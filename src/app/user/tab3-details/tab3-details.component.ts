import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3-details',
  templateUrl: './tab3-details.component.html',
  styleUrls: ['./tab3-details.component.css']
})
export class Tab3DetailsComponent implements OnInit {

  user;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
