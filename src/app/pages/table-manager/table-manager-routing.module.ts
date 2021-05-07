import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableManagerComponent } from './table-manager.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [{
  path: '',
  component: TableManagerComponent,
  children: [
    {
      path: 'table-view1',
      component: TableViewComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableManagerRoutingModule { }
