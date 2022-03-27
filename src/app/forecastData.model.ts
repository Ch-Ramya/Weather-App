export class ForecastData {
  public date: string;
  public sunrise: string;
  public temperature: number;
  public sunset: string;
  public icon : string;

  constructor(date: string, temperature: number, sunrise: string, sunset: string, icon : string){
    this.date = date;
    this.sunrise = sunrise;
    this.temperature = temperature;
    this.sunset = sunset;
    this.icon = "http://openweathermap.org/img/w/" + icon + ".png";
  }
}


