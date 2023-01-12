import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material/material.module';

import { EncuestaComponent } from './encuesta.component';
import { PostEncuestaService } from '../services/post-encuesta.service';


describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;
  let fakePostEncuestaService: PostEncuestaService;

  beforeEach(async () => {

    fakePostEncuestaService = jasmine.createSpyObj<PostEncuestaService>(
      'PostEncuestaService',
      {
        postEncuesta: of(true)
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ EncuestaComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
      ],
      providers: [ { provide: PostEncuestaService, useValue: fakePostEncuestaService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
