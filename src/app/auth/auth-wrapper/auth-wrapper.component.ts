import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {

  constructor(
	private router: Router
  ) { }

  ngOnInit(): void {
	  if (localStorage.getItem('user')) {
        this.router.navigate(['/user/home']).then();
      }
  }

}
