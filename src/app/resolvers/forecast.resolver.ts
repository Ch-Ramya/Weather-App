import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {WeatherService} from "../services/weather.service";

@Injectable({providedIn : 'root'})

//this acts as a resolver for the /forecast route
export class ForecastResolver implements Resolve<any> {
  constructor(private weatherService : WeatherService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
    return this.weatherService.fetchForecastDetails();
  }
}
