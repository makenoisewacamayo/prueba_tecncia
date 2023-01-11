import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {

  form: FormGroup;

  isHandset$: Observable<boolean> = this.breakpoint_observer.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpoint_observer: BreakpointObserver) {
    this.form = new FormGroup({
      email: new FormControl<string>('', { validators: [Validators.required, Validators.email], nonNullable: true}),
      genero: new FormControl<string>('', { validators: Validators.required, nonNullable: true})
    })
  }

}
