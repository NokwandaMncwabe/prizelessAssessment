import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  info: any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo(){
    this.service.getApiInfo().subscribe(data =>{
      this.info = data;
      console.log(this.info);
    })
  }

}
