import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  a: boolean= false
  foreWeather: CurrentWeather[] = [];
  city: string
  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }
  Forecast(){
    this.ws.localWeather(this.city).subscribe(
      (data)=>{
        
        for(let i=0;i<data.list.length;i=i+8){
          const temp = new CurrentWeather(data.list[i].dt_txt,
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
            this.foreWeather[i/8] = temp 
            this.a=true
        }
      
        console.log(data);
        console.log(this.foreWeather)
      }
    )
   }

}
