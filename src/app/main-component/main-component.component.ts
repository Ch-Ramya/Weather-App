import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../weather.service";


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  weatherData : any;
  weatherCardData : any;
  weatherMoreInfo : any;
  constructor(private weatherService : WeatherService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    //Once the weather data is resolved, accordingly weather card data object and moreInfo object is constructed
    this.weatherData = this.route.snapshot.data["data"];
    this.weatherCardData = this.weatherService.getWeatherCardData(this.weatherData);
    this.weatherMoreInfo = this.weatherService.getWeatherMoreDetails(this.weatherData);
  }

  //On search of a city, weather info is fetched for the location and localStorage values are updated
  getWeatherData() {
    this.weatherService.fetchWeatherDetails().subscribe((data) => {
      this.weatherService.processLatLngFromData(data);
      this.weatherCardData = this.weatherService.getWeatherCardData(data);
      this.weatherMoreInfo = this.weatherService.getWeatherMoreDetails(data);
    })
  }



}
