import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  cityData = { humidity:'', avgTemp:'', highTemp:'', lowTemp:'', status:'' };
  getWeather(city){
    this._httpService.retrieveForecastk(city)
    .then( cityData => {
        console.log(cityData)
        this.cityData.humidity = "humidity: " + cityData.main.humidity;
        this.cityData.avgTemp = "Temp Avg: " + (Math.round(cityData.main.temp) - 273)
        this.cityData.highTemp = "Temp Max: " + (Math.round(cityData.main.temp_max) - 273)
        this.cityData.lowTemp = "Temp Min: " + (Math.round(cityData.main.temp_min) - 273)
        this.cityData.status = "Status: " + (cityData.weather[0].description)
    })
    .catch(err => {
        console.log('on .CATCH')
        console.log(err)
    })
  }
  ngOnInit() {
    this.getWeather("WashingtonDC")
  }

}
