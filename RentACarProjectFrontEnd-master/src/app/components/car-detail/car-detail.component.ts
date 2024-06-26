import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail-service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{
  cars:Car[] = [];
  carDetails:CarDetail[]=[];
  baseUrl="https://localhost:44355/Uploads/Images/";
  constructor(
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
      }
      else{
        return ;
      }
    })
  }
  
  getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data;
      console.log(response)
    })
  }
}
