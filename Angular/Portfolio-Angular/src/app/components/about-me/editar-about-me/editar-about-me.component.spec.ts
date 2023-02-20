import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAboutMeComponent } from './editar-about-me.component';

describe('EditarAboutMeComponent', () => {
  let component: EditarAboutMeComponent;
  let fixture: ComponentFixture<EditarAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
