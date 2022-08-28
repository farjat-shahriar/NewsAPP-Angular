import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussnessComponent } from './bussness.component';

describe('BussnessComponent', () => {
  let component: BussnessComponent;
  let fixture: ComponentFixture<BussnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
