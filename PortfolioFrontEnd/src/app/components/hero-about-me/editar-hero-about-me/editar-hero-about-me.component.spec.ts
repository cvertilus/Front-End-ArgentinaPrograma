import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHeroAboutMeComponent } from './editar-hero-about-me.component';

describe('EditarHeroAboutMeComponent', () => {
  let component: EditarHeroAboutMeComponent;
  let fixture: ComponentFixture<EditarHeroAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHeroAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHeroAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
