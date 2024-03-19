import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { State, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AlertComponent } from './components/alert/alert.component';
import { OperationActionsTypes } from './ngrx/aircrafts.action';



@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AlertComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    StoreModule.forRoot({airbusState: AircraftsReducer}), 
    EffectsModule.forRoot([AircraftsEffects]),
    StoreDevtoolsModule.instrument(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
