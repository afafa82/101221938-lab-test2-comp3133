import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SpacexapiService} from '../service/spacexapi.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissiondetailsComponent{

  results: any;
  constructor(private http : HttpClient, private readonly route: ActivatedRoute,){
  }
  url = "https://api.spacexdata.com/v3/launches";

  ngOnInit(){
    this.http.get(this.url).subscribe(data => {
      console.log(data);
     this.results = data;
    })
  }


    
  }