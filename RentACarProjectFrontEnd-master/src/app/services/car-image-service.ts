import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/car-image';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44355/api/";
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  
}

