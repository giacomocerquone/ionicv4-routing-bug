import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPage} from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  { path: 'inner-first', loadChildren: './inner-first/inner-first.module#InnerFirstPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}
