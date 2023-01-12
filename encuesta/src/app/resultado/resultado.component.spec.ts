import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material/material.module';

import { ResultadoComponent } from './resultado.component';
import { GetResultadoService } from '../services/get-resultado.service';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  let fakeGetResultadoService: GetResultadoService;

  beforeEach(async () => {

    fakeGetResultadoService = jasmine.createSpyObj<GetResultadoService>(
      'GetResultadoService',
      {
        getResultado: of([
          { genero: 'Rock', count: 10 },
          { genero: 'Pop', count: 5 },
          { genero: 'Jazz', count: 15 },
          { genero: 'Funky', count: 2 }
        ])
      }
    );


    await TestBed.configureTestingModule({
      declarations: [ ResultadoComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule
      ],
      providers: [
        { provide: GetResultadoService, useValue: fakeGetResultadoService  }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
