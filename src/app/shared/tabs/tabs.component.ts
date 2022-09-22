import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  activeTabIndex = 1;
  @Output() emitActiveTabIndex = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
