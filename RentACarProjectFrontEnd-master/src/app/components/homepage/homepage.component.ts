import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
baseUrl="https://localhost:44355/Uploads/Images/"
imageName = "Homepagelogo.jpg"
  ngOnInit(): void {
    
  }
}
