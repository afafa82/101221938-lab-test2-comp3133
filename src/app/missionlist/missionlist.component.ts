import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SpacexapiService } from '../service/spacexapi.service';
import { Spacexes } from '../model/spacexes';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionlistComponent {
  constructor(private http : HttpClient){
  }
  lists: any [] = []
  url = "https://api.spacexdata.com/v3/launches"
  tests$ = this.http.get(this.url).subscribe((lists:any)=>{
    this.lists = lists
  })
    getSpacexes(){
        return this.http.get(this.url).subscribe((lists:any)=>{
          this.lists = lists
        })
    }
  }
