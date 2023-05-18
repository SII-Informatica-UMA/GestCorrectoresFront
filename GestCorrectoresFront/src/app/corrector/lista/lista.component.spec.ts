import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { ListaComponent } from './lista.component';
import { CorrectorService } from '../../service/correctores.service';
import { Corrector } from '../../models/correctores';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let correctoresService: CorrectorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CorrectorService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    correctoresService = TestBed.inject(CorrectorService);
  });

  it('debe crear la componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe devolver la lista de correctores cuando se inicializa', () => {
    const mockCorrectores: Corrector[] = [
      new Corrector('John', 'Doe', 'Doe', 'john@example.com', 0, '123456789'),
      new Corrector('Jane', 'Smith', 'Smith', 'jane@example.com', 0, '987654321'),
      new Corrector('Michael', 'Johnson', 'Johnson', 'michael@example.com', 0, '567890123'),
    ];

    spyOn(correctoresService, 'getAllCorrectors').and.returnValue(of(mockCorrectores));

    fixture.detectChanges();

    expect(component.listaCorrectores).toEqual(mockCorrectores);
  });



  it('debe borrar un corrector cuando eliminarCorrector es llamado', () => {
    const mockUserId = 1;
    spyOn(correctoresService, 'deleteCorrector').and.returnValue(of({}));

    spyOn(component, 'obtenerCorrectores');

    component.eliminarCorrector(mockUserId);

    expect(correctoresService.deleteCorrector).toHaveBeenCalledWith(mockUserId);
    expect(component.obtenerCorrectores).toHaveBeenCalled();
  });

  it('Debe navegar a add-corrector cuando addCorrector es llamado', () => {
    spyOn(component['router'], 'navigate');

    component.addCorrector();

    expect(component['router'].navigate).toHaveBeenCalledWith(['add-corrector']);
  });

  // Add more test cases as needed

});
