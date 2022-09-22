import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4-details',
  templateUrl: './tab4-details.component.html',
  styleUrls: ['./tab4-details.component.css']
})
export class Tab4DetailsComponent implements OnInit {

  user;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
