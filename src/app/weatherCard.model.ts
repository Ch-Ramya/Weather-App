export class weatherCard{
  public cityName : string;
  public countryName : string;
  public temperature: number;
  public climateDescription : string;
  public minTemp : number;
  public maxTemp : number;




  constructor(cityName: string, countryName : string, temperature: number, climateDescription: string, minTemp: number,  maxTemp : number){
    this.cityName = cityName;
    this.countryName = countryName;
    this.temperature = temperature;
    this.climateDescription = climateDescription;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
  }
}
