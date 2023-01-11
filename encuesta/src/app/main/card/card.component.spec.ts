import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../material/material.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();

      expect(component.goTo()).toHaveBeenCalled()
    });




});
