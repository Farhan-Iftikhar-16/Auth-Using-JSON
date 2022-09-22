import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1DetailsComponent } from './tab1-details.component';

describe('Tab1DetailsComponent', () => {
  let component: Tab1DetailsComponent;
  let fixture: ComponentFixture<Tab1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
