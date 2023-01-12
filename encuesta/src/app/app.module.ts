// base modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


// Material
import { MaterialModule } from './material/material.module';

// app component and modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/card/card.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AboutComponent } from './about/about.component';
import { ResultadoComponent } from './resultado/resultado.component';
// services
import { GetResultadoService } from './services/get-resultado.service';
import { PostEncuestaService } from './services/post-encuesta.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    EncuestaComponent,
    AboutComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    GetResultadoService,
    PostEncuestaService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
