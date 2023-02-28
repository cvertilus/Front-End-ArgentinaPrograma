import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSkillComponent } from './modificar-skill.component';

describe('ModificarSkillComponent', () => {
  let component: ModificarSkillComponent;
  let fixture: ComponentFixture<ModificarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
