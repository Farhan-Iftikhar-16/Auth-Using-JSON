import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3DetailsComponent } from './tab3-details.component';

describe('Tab3DetailsComponent', () => {
  let component: Tab3DetailsComponent;
  let fixture: ComponentFixture<Tab3DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab3DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
