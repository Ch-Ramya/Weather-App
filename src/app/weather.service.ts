import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {weatherCard} from "./weatherCard.model";
import {moreInfo} from "./weatherMoreInfo.model";
import {ForecastData} from "./forecastData.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

//Handles all the common functionality throughout all the components
export class WeatherService {

  //required api keys and url
  apiKey = '648da3cae4c1ab8f9399aa04e2b68999';
  apiUrl = 'http://api.openweathermap.org/data/2.5';
  forecastUrl ='http://api.openweathermap.org/data/2.5/onecall';
  private location : string = '';
  weatherData : any;

  constructor(private http : HttpClient) {
  }

  //gets the location details( city name) from the local storage
  getLocationDetails() {
    const locationDetails: any =JSON.parse(localStorage.getItem("location") || '{"cityName" : "New York"}');
    return locationDetails["cityName"];
  }

  //sets the location details(city name) to local storage
  setLocationDetails(placeDetails : object) {
    localStorage.setItem("location", JSON.stringify(placeDetails));
  }

  //sets the current chosen city {lat, lng} in local storage
  setLatlngDetails(location : object) {
    localStorage.setItem("latLngDetails", JSON.stringify(location));
  }

  //gets the current choosen city(lat-lng details) from the local storage, if the key doesnt exist default values are used
  getLatlngDetails() {
    const latLng: any =JSON.parse(localStorage.getItem("latLngDetails") || '{"latitude" : 40.71, "longitude" : -74.00}');
    return latLng;
  }

  //Construct the latitude and longitude object from the weather data
  processLatLngFromData(data : any) {
    const obj = {"latitude" : data.coord.lat, "longitude" : data.coord.lon};
    this.setLatlngDetails(obj);
  }

  //Constructs weather card object from the whole response data
  getWeatherCardData(data: any) {
    const cityName: any = data.name;
    const countryName: any = data.sys.country;
    const temp : any = data.main.temp;
    const minTemp = data["main"]["temp_min"];
    const maxTemp = data["main"]["temp_max"];
    const description = data.weather[0].description;

    return new weatherCard(cityName, countryName, temp, description, minTemp, maxTemp);
  }

  //Constructs the more details of the weather information from the response object
  getWeatherMoreDetails(data : any) {
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const wind = data.wind.speed;
    const visibility = data.visibility;

    return new moreInfo(wind, sunrise, sunset, humidity, pressure, visibility);
  }

  //fetches the weather data for a choosen city
  fetchWeatherDetails() {
    const place = this.getLocationDetails();
    return this.http.get(`${this.apiUrl}/weather?q=${place}&units=metric&appid=${this.apiKey}`);
  }

  //fetches the forecast data for the choosen city with lat-longitude information
  fetchForecastDetails() {
    const latLng = this.getLatlngDetails();
    return this.http.get(`${this.forecastUrl}?lat=${latLng.latitude}&lon=${latLng.longitude}&exclude=hourly,minutely,alerts&units=metric&appid=${this.apiKey}`);
  }

  getCurrentFromForecast(forecastData : any) {
    const date = forecastData.dt;
    const temperature = forecastData.temp.day;
    const sunrise = forecastData.sunrise;
    const sunset = forecastData.sunset;
    const icon = forecastData.weather[0].icon;

    return new ForecastData(date, temperature, sunrise, sunset, icon);

  }

  getNextDaysForecastData(forecastData : any) {
    const result:any[] = [];
    forecastData.forEach((data : any) => {
      result.push(this.getCurrentFromForecast(data));
    })
    return result;
  }
}





