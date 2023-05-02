import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutMeComponent } from './hero-about-me.component';

describe('HeroAboutMeComponent', () => {
  let component: HeroAboutMeComponent;
  let fixture: ComponentFixture<HeroAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
