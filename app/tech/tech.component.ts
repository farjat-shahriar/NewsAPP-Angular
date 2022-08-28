import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  Datatech:any=[]
  constructor(private TakeData:ServicesService) { }

  ngOnInit(): void {
    this.TakeData.Techline().subscribe((res)=>{
       console.log(res.articles)
      this.Datatech=res.articles;
    })
  }
  }
