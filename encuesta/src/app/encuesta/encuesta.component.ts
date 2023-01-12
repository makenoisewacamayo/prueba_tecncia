import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

// material
import {MatSnackBar} from '@angular/material/snack-bar';

// services
import { PostEncuestaService } from './../services/post-encuesta.service'
// interfaces
import { EncuestaDataInterface } from '../interfaces/general.interfaces';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {

  form: FormGroup;

  generos: Array<string> = [
    'Jazz',
    'Rock',
    'Pop',
    'Clasica',
    'Blues',
    'Salsa'
  ]

  isHandset$: Observable<boolean> = this.breakpoint_observer.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
      private breakpoint_observer: BreakpointObserver,
      private post_encuesta_service: PostEncuestaService,
      private snack_bar: MatSnackBar
    ) {
    this.form = new FormGroup({
      email: new FormControl<string>('', { validators: [Validators.required, Validators.email], nonNullable: true}),
      genero: new FormControl<string>('', { validators: Validators.required, nonNullable: true})
    })
  }

  onSubmit() {
    const payload: EncuestaDataInterface =  this.form.value;
    this.post_encuesta_service.postEncuesta(payload)
      .subscribe({
        next: () => this.snack_bar.open("El formulario se envio exitosamnete", "Exito"),
        error: () => this.snack_bar.open("Ha ocurrido un error", "Error")
      })

  }

}
