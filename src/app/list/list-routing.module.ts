import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPage} from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'second', loadChildren: './second/second.module#SecondPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
