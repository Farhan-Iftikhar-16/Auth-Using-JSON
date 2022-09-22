import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4DetailsComponent } from './tab4-details.component';

describe('Tab4DetailsComponent', () => {
  let component: Tab4DetailsComponent;
  let fixture: ComponentFixture<Tab4DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab4DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab4DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
