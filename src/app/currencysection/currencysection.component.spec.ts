import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencysectionComponent } from './currencysection.component';

describe('CurrencysectionComponent', () => {
  let component: CurrencysectionComponent;
  let fixture: ComponentFixture<CurrencysectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencysectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
