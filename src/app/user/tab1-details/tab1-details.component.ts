import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ToastService} from 'src/app/toast.service';

@Component({
  selector: 'app-tab1-details',
  templateUrl: './tab1-details.component.html',
  styleUrls: ['./tab1-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Tab1DetailsComponent implements OnInit {
 @Input() name: string;
  items = [
    {
      caseNumber: 'Test-1213-1',
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
      caseNumber: 'Test-1213-1',
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
      caseNumber: 'Test-1213-1',
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
      caseNumber: 'Test-1213-2',
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
      caseNumber: 'Test-1213-2',
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
      caseNumber: 'Test-1213-2',
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
      caseNumber: 'Test-1213-3',
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
      caseNumber: 'Test-1213-3',
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
      caseNumber: 'Test-1213-3',
      controlNumber: '2022-270',
      id: '74839',
      status: 'In-progress',
      date: '',
      assign: 'commercial',
      level: 'Non-sensitive',
      createdBy: 'Web-logic',
      createdDate: '08/01/2022',
    }
  ];
  items1ToDisplay = [];
  items2ToDisplay = [];
  toggle:boolean =true;

  constructor(
    private toastService: ToastService,
    public changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const storageValue = localStorage.getItem(this.name)
    this.toggle = storageValue ? JSON.parse(storageValue) : false;
  }

  showInfo(): void {
    this.toastService.info('Coming Soon');
  }

}
