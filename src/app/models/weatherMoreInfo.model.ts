//creates object for more details like wind, pressure etc
export class moreInfo{
  public windSpeed : number;
  public sunrise: number;
  public sunset : number;
  public humidity : number;
  public pressure : number;
  public visibility : number;




  constructor(windSpeed : number,  sunrise: number, sunset : number, humidity : number, pressure : number, visibility : number){
    this.windSpeed = windSpeed;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.humidity = humidity;
    this.pressure = pressure;
    this.visibility = visibility;
  }
}
