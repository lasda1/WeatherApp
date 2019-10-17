import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherServiceService {

  constructor(private http: HttpClient) { }
  weatherAPI = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/find?q="
  weatherAPIByCord = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/find?lat="
  getWeatherByCityName(city) {
    return this.http.get<any>(this.weatherAPI + city + "&cnt=1&units=metric&appid=431858962ca7367d88af80fc13b16fae");
  }
  getWeatherByCord(obj) {
    return this.http.get<any>(this.weatherAPIByCord + obj.lat + '&lon=' + obj.lng + '&units=metric&cnt=1&appid=431858962ca7367d88af80fc13b16fae');
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }
}
