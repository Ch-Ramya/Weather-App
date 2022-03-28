import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './Components/weather-card/weather-card.component';
import { HeaderComponentComponent } from './Components/header-component/header-component.component';
import { SearchCityComponent } from './Components/search-city/search-city.component';
import { WeatherMoreInfoComponent } from './Components/weather-more-info/weather-more-info.component';
import { ForecastInfoComponent } from './Components/forecast-info/forecast-info.component';
import {WeatherResolver} from "./resolvers/weather.resolver";
import { MainComponentComponent } from './main-component/main-component.component';
import {ForecastResolver} from "./resolvers/forecast.resolver";

const appRoutes: Routes =[
  {path: 'current', component: MainComponentComponent, resolve : {data : WeatherResolver}},
  {path: 'forecast', component: ForecastInfoComponent, resolve : {data: ForecastResolver}},
  {path: '', redirectTo: '/current', pathMatch:'full', resolve : {data : WeatherResolver}}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    HeaderComponentComponent,
    SearchCityComponent,
    WeatherMoreInfoComponent,
    ForecastInfoComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
