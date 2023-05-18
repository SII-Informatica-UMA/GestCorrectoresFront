import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AddCorrectorComponent } from './add-corrector.component';
import { CorrectorService } from '../../service/correctores.service';
import { of } from 'rxjs';
import { Corrector } from '../../models/correctores';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddCorrectorComponent', () => {
  let component: AddCorrectorComponent;
  let fixture: ComponentFixture<AddCorrectorComponent>;
  let correctoresServiceSpy: jasmine.SpyObj<CorrectorService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CorrectorService', ['addCorrector']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      declarations: [AddCorrectorComponent],
      providers: [
        Location,
        { provide: CorrectorService, useValue: spy }
      ]
    }).compileComponents();

    correctoresServiceSpy = TestBed.inject(CorrectorService) as jasmine.SpyObj<CorrectorService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorrectorComponent);
    component = fixture.componentInstance;

    correctoresServiceSpy.addCorrector.and.returnValue(of({}));
    spyOn(window, 'alert');
    spyOn(component.router, 'navigate');
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar un error si los campos estan incompletos', () => {
    const sendButton = fixture.nativeElement.querySelector('button[type="submit"]');
    sendButton.click();
    expect(window.alert).toHaveBeenCalledWith('Campos incompletos.');
    expect(correctoresServiceSpy.addCorrector).not.toHaveBeenCalled();
  });

  it('debe navegar a /correctores en boton de volver', () => {
    const backButton = fixture.nativeElement.querySelector('button[type="button"]');
    if (backButton) {
      backButton.click();
      expect(component.router.navigate).toHaveBeenCalledWith(['/correctores']);
    } else {
      fail('boton de volver no encontrado');
    }
  });
});
