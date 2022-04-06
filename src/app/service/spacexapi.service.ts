import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

export class SpacexapiService{
    constructor(private http : HttpClient){
    }
    lists: any [] = []
    url = "https://api.spacexdata.com/v3/launches"
  
      getSpacexes(){
          return this.http.get(this.url).subscribe((lists:any)=>{
            this.lists = lists
          })
      }
}
