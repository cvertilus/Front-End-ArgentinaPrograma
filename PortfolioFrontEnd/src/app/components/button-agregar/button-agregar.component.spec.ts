import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAgregarComponent } from './button-agregar.component';

describe('ButtonAgregarComponent', () => {
  let component: ButtonAgregarComponent;
  let fixture: ComponentFixture<ButtonAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
