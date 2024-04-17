import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car-detail';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44355/api/Cars/";
  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "GetCarDetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "GetById?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
