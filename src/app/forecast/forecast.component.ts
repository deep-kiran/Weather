import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";
import { ICurrentWeather } from "src/app/weatherInterface";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  a: boolean= false
  public foreW: ICurrentWeather[] = []
  foreWeather: CurrentWeather[] = [];
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.ws.inputClickedEvent.subscribe((data)=>{
      let city=data.data;
      this.ws.lw(city).subscribe(
        (data)=>{
          this.foreW = data
          for(let i=0;i<this.ws.length(this.foreW);i=i+8){
          
              const temp = this.ws.weatherconstructor(this.foreW,i)
              this.foreWeather[i/8] = temp 
              this.a=true
          }
        
          console.log(data);
          console.log(this.foreWeather)
        }
      )
    })
    
  }
 
    
   

}
