import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44355/api/Brands/";
  constructor(private httpCilent:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpCilent.get<ListResponseModel<Brand>>(this.apiUrl+"GetAll");
  }

  addBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpCilent.post<ResponseModel>(this.apiUrl+"Add",brand)
  }

}
