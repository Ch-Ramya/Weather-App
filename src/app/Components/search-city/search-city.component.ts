import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {WeatherService} from "../../weather.service";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {
  @Output() changeLocationEvent = new EventEmitter();
  location: any = this.weatherService.getLocationDetails();

  //Search by city form
  chooseCityForm = this.formBuilder.group({
    cityName: new FormControl(this.location, [Validators.required])
  });

  constructor(private formBuilder : FormBuilder, private weatherService : WeatherService) { }

  ngOnInit(): void {

  }

  //On submitting the form
  onSubmit() {
    //save the location details in local storage
    this.weatherService.setLocationDetails(this.chooseCityForm.value);
    //trigger the event emitter
    this.changeLocationEvent.emit();
  }

}
