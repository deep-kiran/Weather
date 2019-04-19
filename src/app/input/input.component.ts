import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/app/weather.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  city: string
  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }
  Forecast(){
    this.ws.inputClickedEvent.emit({data:this.city});
   }


}
