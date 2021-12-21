import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VillainService } from '../villain.service';
import { VillainDetailModel } from '../villain.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-boese',
  templateUrl: './villain-detail.component.html'
})
export class VillainDetailPage implements OnInit {


  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    private webApi: VillainService) {
    this.route.params.subscribe(params =>
      this.extractRouterParam(params));
  }

  public id: string = "";
  showError: boolean;
  extractRouterParam(params: Params) {
    this.id = params['id'];
    if (this.id == "") {
      this.showError = true;
    }
    this.load();
  }

  public status = 0.7;
  ngOnInit() { }

  public openLink(url: string): void {
    console.log(url);
    window.open(url,'_system', 'location=yes');
  }

  model: VillainDetailModel;
  async load() {
    this.model = await this.webApi.getEvilDetail(this.id);
  }
}
