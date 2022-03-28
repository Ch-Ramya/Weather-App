import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {weatherCard} from "../../models/weatherCard.model";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherCard :any;
  constructor() { }

  ngOnInit(): void {
  }

}
