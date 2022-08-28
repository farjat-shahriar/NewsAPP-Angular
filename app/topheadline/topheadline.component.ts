import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
Data:any=[]
  constructor(private GetData:ServicesService) { }

  ngOnInit(): void {
    this.GetData.TopHeadline().subscribe((result)=>{
       console.log(result.articles)
      this.Data=result.articles;
    })
  }

}
