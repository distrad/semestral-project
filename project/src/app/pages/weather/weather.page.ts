import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_WEATHER = environment.API_URL_WEATHER;
const API_KEY_WEATHER =environment.API_KEY_WEATHER;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherTemp :any
  todayDate = new Date()
  cityName :any
  weatherIcon :any
  weatherDetails:any
  constructor(public httpClient:HttpClient) { 
    this.loadData()
  }

  ngOnInit() {
  }

  loadData(){
    this.httpClient.get(`${API_URL_WEATHER}/weather?q=${"Santiago"}&appid=${API_KEY_WEATHER}`).subscribe(results =>{
      console.log(results)
      this.weatherTemp = results['main']
      this.cityName = results['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails);
      this.weatherIcon =`http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png` 
    })
    
  }

}
