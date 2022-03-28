import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {WeatherService} from "../services/weather.service";

@Injectable({providedIn : 'root'})

//this acts as a resolver for current route
export class WeatherResolver implements Resolve<any> {
  constructor(private weatherService : WeatherService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
    return this.weatherService.fetchWeatherDetails();
  }
}
