import {Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ToastService} from "./toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toastMessages = [];
  title = 'auth-using-json';
  componentInView = new Subject();

  constructor(
    private toastService: ToastService
  ) {}


  ngOnInit():void {
    this.toastService.toastMessages.pipe(takeUntil(this.componentInView)).subscribe((response: any) => {
      if (this.toastMessages && this.toastMessages.length > 0 && this.toastMessages.map(message => message.detail).includes(response.detail)) {
        return;
      }

      this.toastMessages.push(response);

      if (this.toastMessages && this.toastMessages.length > 0) {
        this.toastMessages.forEach((message, index) => {
          setTimeout(() => {
            this.toastMessages.splice(index, 1)
          }, 2500);
        });
      }
    });
  }
}
