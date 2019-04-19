import { Injectable ,EventEmitter} from '@angular/core';

import { Http,Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';

import { CurrentWeather } from "src/app/current-weather";
import {Observable} from 'rxjs/Observable';
import { ICurrentWeather } from "src/app/weatherInterface";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  inputClickedEvent= new EventEmitter<{data:string}>()
  apiKey = "f6e4ad1d9bf65d48c3e0ac42d6b50dc2";
  constructor(private http: HttpClient) { }
  length(data){
    return data.list.length;
  }
 
  weatherconstructor(data: any,i: number){
    return new CurrentWeather(data.list[i].dt_txt,
      data.city.name,
      data.list[i].main.temp,
      data.list[i].weather[0].icon,
      data.list[i].weather[0].description,
      data.list[i].main.temp_max,
      data.list[i].main.temp_min,
      data.list[i].main.pressure,
      data.list[i].main.humidity,
      data.list[i].wind.speed,
      data.city.country)
  }
  lw(city:string):Observable<ICurrentWeather[]>{
    console.log("inside api");
    return this.http.get<ICurrentWeather[]>("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+this.apiKey);
  }
}
