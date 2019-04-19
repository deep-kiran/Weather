import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";
import { CurrentWeather } from "src/app/current-weather";
import 'rxjs/Rx';
import { ICurrentWeather } from "src/app/weatherInterface";
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  //a: boolean =false
  myWeather: CurrentWeather
  location
  //city: string
  public wea: ICurrentWeather[] =  [];
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.ws.inputClickedEvent.subscribe((data)=>{
      let city=data.data;
      this.ws.lw(city).subscribe((data)=>{
        this.wea = data;
        this.myWeather = this.ws.weatherconstructor(this.wea,0);
       // this.a=true;
        console.log(this.wea)
    })
    })
   }
 /*  WeatherForecast(){
    this.ws.localWeather(this.city).subscribe(
      (data)=>{
        console.log("abc")
        console.log(data);
    
          this.myWeather = this.ws.weatherconstructor(data); 
                                  
      }
    )
   }*/
  /* WeatherForecast(){
     this.ws.lw(this.city).subscribe((data)=>{
         this.wea = data;
         this.a=true;
         console.log(this.wea)
     })
   }*/

}
