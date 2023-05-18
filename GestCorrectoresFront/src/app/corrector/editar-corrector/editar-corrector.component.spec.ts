import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EditarCorrectorComponent } from './editar-corrector.component';
import { CorrectorService } from '../../service/correctores.service';
import { Corrector } from '../../models/correctores';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('EditarCorrectorComponent', () => {
  let component: EditarCorrectorComponent;
  let fixture: ComponentFixture<EditarCorrectorComponent>;
  let correctoresServiceSpy: jasmine.SpyObj<CorrectorService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const correctoresService = jasmine.createSpyObj('CorrectorService', ['getCorrectorById', 'updateCorrector']);
    const router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [EditarCorrectorComponent],
      imports: [FormsModule],
      providers: [
        Location,
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
        { provide: CorrectorService, useValue: correctoresService },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCorrectorComponent);
    component = fixture.componentInstance;
    correctoresServiceSpy = TestBed.inject(CorrectorService) as jasmine.SpyObj<CorrectorService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería obtener el corrector al inicializarse', () => {
    const corrector: Corrector = {
      id: 1,
      nombre: 'Juan',
      apellido1: 'Perez',
      apellido2: 'Gallardo',
      email: 'jpegallardo@example.com',
      telefono: '1234567890',
      examenes: 0
    };
    correctoresServiceSpy.getCorrectorById.and.returnValue(of(corrector));

    component.ngOnInit();

    expect(correctoresServiceSpy.getCorrectorById).toHaveBeenCalledWith(1);
    expect(component.corrector).toEqual(corrector);
  });

  it('Debería mostrar una alerta al haber error al edita el corrector', () => {
    const errorMessage = 'Error al editar el corrector.';
    correctoresServiceSpy.updateCorrector.and.returnValue(throwError({ error: errorMessage }));

    spyOn(window, 'alert');
    spyOn(console, 'error');

    component.onUpdate();

    expect(window.alert).toHaveBeenCalledWith('Error al editar el corrector ' + errorMessage);
    expect(console.error).toHaveBeenCalled();
  });


});
