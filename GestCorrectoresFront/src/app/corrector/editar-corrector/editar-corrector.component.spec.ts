import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCorrectorComponent } from './editar-corrector.component';

describe('EditarCorrectorComponent', () => {
  let component: EditarCorrectorComponent;
  let fixture: ComponentFixture<EditarCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCorrectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
