import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '101221938-lab-test2-comp3133';
  
  constructor(private http : HttpClient){

  } 
  ngOnInit(): void {
    
   
  }
}
