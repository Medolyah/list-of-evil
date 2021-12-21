import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { VillainRoutingModule } from './villain.routing';
import { VillainService } from './villain.service';
import { HttpClientModule } from '@angular/common/http';
import { VillainSecretInput } from './villain-secret-input/villain-secret-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VillainDetailPage } from './villain-detail/villain-detail.component';
import { VillainListPage } from './villain-list/villain-list.component';

@NgModule({
  declarations: [VillainDetailPage, VillainListPage, VillainSecretInput],
  entryComponents: [],
  imports: [IonicModule.forRoot(), VillainRoutingModule, HttpClientModule, FormsModule, CommonModule],
  providers: [
    StatusBar,
    SplashScreen,
    VillainService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: []
})
export class BoeseModule {}
