import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.css']
})
export class ForecastInfoComponent implements OnInit {
  forecastData: any;
  location : any;
  sevenDaysForecast : any;

  constructor(private weatherService : WeatherService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    //get the forecast response data
    this.forecastData = this.route.snapshot.data["data"];
    //get the current choosen location
    this.location = this.weatherService.getLocationDetails();
    //from the response, get the next 7 day forecast data
    this.sevenDaysForecast = this.weatherService.getNextDaysForecastData(this.forecastData.daily);
  }

}
