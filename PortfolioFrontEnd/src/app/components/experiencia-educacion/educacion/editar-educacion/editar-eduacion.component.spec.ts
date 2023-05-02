import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEduacionComponent } from './editar-eduacion.component';

describe('EditarEduacionComponent', () => {
  let component: EditarEduacionComponent;
  let fixture: ComponentFixture<EditarEduacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEduacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEduacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
