import { Component, OnInit } from '@angular/core';

import {ToastService} from "../../toast.service";
declare let Email: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; // @ts-ignore
      return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

  name:string;
  toggle:boolean = true;
  activeTab = 1;
  items = [
    {
      caseNumber: 'Test-1213',
      controlNumber: '2022-270',
      id: '74839',
      status: 'In-progress',
      date: '',
      assign: 'commercial',
      level: 'Non-sensitive',
      createdBy: 'Web-logic',
      createdDate: '08/01/2022',
    },
    {
      caseNumber: 'Test-1213',
      controlNumber: '2022-270',
      id: '74839',
      status: 'In-progress',
      date: '',
      assign: 'commercial',
      level: 'Non-sensitive',
      createdBy: 'Web-logic',
      createdDate: '08/01/2022',
    },
    {
      caseNumber: 'Test-1213',
      controlNumber: '2022-270',
      id: '74839',
      status: 'In-progress',
      date: '',
      assign: 'commercial',
      level: 'Non-sensitive',
      createdBy: 'Web-logic',
      createdDate: '08/01/2022',
    },



  ];
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.toastService.info('Coming Soon');
  }

  onSendNotificationClicked(): void {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : '',
      Password : '',
      To : '',
      From : '',
      Subject : 'Testing Email',
      Body : 'Hello, this is a testing email'
    }).then(() => {
      this.toastService.success('Email Send Successfully');
    }).catch(() => {
      this.toastService.error('Error Occurred While Sending Email');
    });
  }
}
