import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2DetailsComponent } from './tab2-details.component';

describe('Tab2DetailsComponent', () => {
  let component: Tab2DetailsComponent;
  let fixture: ComponentFixture<Tab2DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab2DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
