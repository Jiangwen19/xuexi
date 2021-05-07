import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataDetailComponent } from "./data-view/data-view.component";
import { DataManagerComponent } from "./data-manager.component";



const routes: Routes = [{
    path: '',
    component: DataManagerComponent,
    children: [
      {
        path: 'data-view1',
        component: DataDetailComponent,
      },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DataManagerRoutingModule { }
  