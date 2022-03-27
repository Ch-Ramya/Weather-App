import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";


@Component({
  selector: 'app-weather-more-info',
  templateUrl: './weather-more-info.component.html',
  styleUrls: ['./weather-more-info.component.css']
})
export class WeatherMoreInfoComponent implements OnInit {
  @Input() "moreInfo": any;
  constructor() { }

  ngOnInit(): void {
  }

}
