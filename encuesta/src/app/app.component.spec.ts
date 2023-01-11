
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';

describe('MainComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Encuesta App'`, () => {
    expect(app.title).toEqual('Encuesta App');
  });

  it(`should have menu as Array`, () => {
    expect(app.menu).toEqual(["Encuesta", "Resultados", "Acerca de"]);
  });

});
