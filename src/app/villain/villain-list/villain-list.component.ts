import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VillainService } from '../villain.service';
import { VillainListDto } from '../villain.dto';
import { VillainModel } from '../villain.model';

@Component({
  selector: 'app-boese',
  templateUrl: './villain-list.component.html',
})
export class VillainListPage implements OnInit {


  data = [];
  constructor(private webApi : VillainService){}

  model : VillainModel[] =[];
  async ngOnInit() { 
      this.model = await this.webApi.getEvilList();
  }
}
