import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastService} from "../../toast.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.toastService.info('Functionality Coming Soon');
  }

  onDropdownValueSelected(event): void {
    this.toastService.info(event.target.value);
  }

  redirectToDashboard(): void {
    this.router.navigate(['user/dashboard']).then();
  }
}
