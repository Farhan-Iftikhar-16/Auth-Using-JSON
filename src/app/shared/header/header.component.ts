import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../toast.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;

  constructor(
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  onLogoutClicked(): void {
    setTimeout(() => {
      localStorage.clear();
      this.toastService.success('Logout Successfully');
      this.router.navigate(['/auth/login']).then();
    });
  }

}
