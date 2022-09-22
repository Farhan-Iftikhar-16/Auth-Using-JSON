import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.scss']
})
export class UserWrapperComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // if (!localStorage.getItem('user')) {
    //   this.router.navigate(['/auth/login']).then();
    // }
  }

}
