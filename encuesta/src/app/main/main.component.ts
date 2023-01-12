import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CardDataInterface } from '../interfaces/general.interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  list: Array<CardDataInterface> = [
    {
      title: "Encuesta",
      description: "is simply dummy text of the printing and typesetting industry.",
      route: "Ir a llenar Encuesta",
      url: "/encuesta"
    },
    {
      title: "Resultados",
      description: "is simply dummy text of the printing and typesetting industry.",
      route: "ver resultados",
      url: "/resultado"
    },
    {
      title: "Acerca de",
      description: "is simply dummy text of the printing and typesetting industry.",
      route: "información",
      url: "/about"
    },
  ];

  isHandset$: Observable<boolean> = this.breakpoint_observer.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpoint_observer: BreakpointObserver) {}

}
