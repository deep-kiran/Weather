import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";
import 'rxjs/Rx';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather
  location
  city: string
  constructor(private ws: WeatherService) { }

  ngOnInit() {
   //this.myWeather =  this.ws.weatherNow();
   /*navigator.geolocation.getCurrentPosition((pos)=>{
     this.location = pos.coords;
     const lat = this.location.latitude;
     const lon = this.location.longitude;*/
     /*this.ws.localWeather(this.city).subscribe(
       (data)=>{
         console.log("abc")
         console.log(data);
        console.log(data.city.name);
        console.log( data.list["0"].weather[0].icon);
         this.myWeather = new CurrentWeather(data.city.name,
                                             data.list[0].main.temp,
                                             data.list[0].weather[0].icon,
                                             data.list[0].weather[0].description,
                                             data.list[0].main.temp_max,
                                             data.list[0].main.temp_min)
       }
     )*/
   }
   WeatherForecast(){
    this.ws.localWeather(this.city).subscribe(
      (data)=>{
        console.log("abc")
        console.log(data);
       console.log(data.city.name);
       console.log( data.list["0"].weather[0].icon);
        this.myWeather = new CurrentWeather(data.list[0].dt_txt,
                                            data.city.name,
                                            data.list[0].main.temp,
                                            data.list[0].weather[0].icon,
                                            data.list[0].weather[0].description,
                                            data.list[0].main.temp_max,
                                            data.list[0].main.temp_min,
                                            data.list[0].main.pressure,
                                            data.list[0].main.humidity,
                                            data.list[0].wind.speed,
                                            data.city.country)
      }
    )
   }

}
