import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encuesta App';

  menu: Array<string> = [
    "Encuesta",
    "Resultados",
    "Acerca de"
  ];

  isHandset$: Observable<boolean> = this.breakpoint_observer.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpoint_observer: BreakpointObserver) {}

}

