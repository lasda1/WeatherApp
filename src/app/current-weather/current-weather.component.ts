import { Component, OnInit } from '@angular/core';
import { CurrentWeatherServiceService } from '../services/current-weather-service.service';
import countryName from '../../assets/names.json';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private wS: CurrentWeatherServiceService) { }
  city: string = '';
  cityExist : boolean= true;
  weatherDetail={};
  ngOnInit() {
    this.getMyWeather()
    
  }
  getMyWeather(){
    this.wS.getPosition().then(data=>{
      this.wS.getWeatherByCord(data).subscribe(weatherObj=>{
          weatherObj=weatherObj.list[0]
          this.weatherDetail={
            name:weatherObj.name,
            humidity:weatherObj.humidity,
            temp:weatherObj.main.temp,
            tempToShow:weatherObj.main.temp+50,
            tempMin:weatherObj.main.temp_min,
            tempMinToShow:weatherObj.main.temp_min+50,
            tempMax:weatherObj.main.temp_max,
            tempMaxToShow:weatherObj.main.temp_max+50,
            country:weatherObj.sys.country.toLowerCase(),
            category:weatherObj.weather[0].main,
            categoryDescription:weatherObj.weather[0].description,
            categoryIcon:weatherObj.weather[0].icon,
            countryname:countryName[weatherObj.sys.country]
          }
      })
    })
  }
  getWeather() {
    if(this.city !== ''){
      this.wS.getWeatherByCityName(this.city).subscribe(
        weatherObj => {
          const flag=weatherObj.count; 
          if (flag > 0){
            this.cityExist=true;
            weatherObj=weatherObj.list[0]
            this.weatherDetail={
              name:weatherObj.name,
              humidity:weatherObj.humidity,
              temp:weatherObj.main.temp,
              tempToShow:weatherObj.main.temp+50,
              tempMin:weatherObj.main.temp_min,
              tempMinToShow:weatherObj.main.temp_min+50,
              tempMax:weatherObj.main.temp_max,
              tempMaxToShow:weatherObj.main.temp_max+50,
              country:weatherObj.sys.country.toLowerCase(),
              category:weatherObj.weather[0].main,
              categoryDescription:weatherObj.weather[0].description,
              categoryIcon:weatherObj.weather[0].icon,
              countryname:countryName[weatherObj.sys.country]
            }
          }else{
            this.cityExist=false;
          }
         }
      )
    }else{
      this.cityExist=true;
      this.getMyWeather()
    }
  }

}
