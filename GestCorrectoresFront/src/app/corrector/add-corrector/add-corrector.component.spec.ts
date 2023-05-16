import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorrectorComponent } from './add-corrector.component';

describe('AddCorrectorComponent', () => {
  let component: AddCorrectorComponent;
  let fixture: ComponentFixture<AddCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorrectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
