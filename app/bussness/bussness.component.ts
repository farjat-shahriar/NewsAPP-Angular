import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-bussness',
  templateUrl: './bussness.component.html',
  styleUrls: ['./bussness.component.css']
})
export class BussnessComponent implements OnInit {
  Databusi:any=[]
  constructor(private GetData:ServicesService) { }

  ngOnInit(): void {
    this.GetData.TopBusinessline().subscribe((result)=>{
       console.log(result.articles)
      this.Databusi=result.articles;
    })
  }

}
