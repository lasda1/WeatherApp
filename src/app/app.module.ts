import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';

//Form
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { GoogleMapWeatherComponent } from './google-map-weather/google-map-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ThermometerComponent,
    GoogleMapWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxEunhbunckCGNZnBZQb775wrj3NxxCiE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
