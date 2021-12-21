import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillainListPage } from './villain-list/villain-list.component';
import { VillainDetailPage } from './villain-detail/villain-detail.component';
import { VillainSecretInput } from './villain-secret-input/villain-secret-input.component';

const routes: Routes = [
  {
    path: '',
    component: VillainListPage
  },
  {
    path: 'secret-evil-input',
    component: VillainSecretInput
  },
  {
    path: ':id',
component: VillainDetailPage  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VillainRoutingModule { }
