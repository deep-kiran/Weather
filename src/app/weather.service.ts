import { Injectable } from '@angular/core';

import { Http,Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';

import { CurrentWeather } from "src/app/current-weather";
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  /*currWeather: CurrentWeather = new CurrentWeather("New York","80","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRattkd3e47dAz0oK1DJO-RB7-2jixJ7vWyDw_JG8WQTRRfvLLI",
                           "Cool","50","90"   )*/
  constructor(private http: HttpClient) { }
 /* weatherNow(){
    return this.currWeather
  }*/
  localWeather(city:string){
    console.log("inside api");
   // console.log(lat);
   // console.log(lon);
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f6e4ad1d9bf65d48c3e0ac42d6b50dc2")
  }
}
