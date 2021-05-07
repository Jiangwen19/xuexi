import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableManagerRoutingModule } from './table-manager-routing.module';
import { TableManagerComponent } from './table-manager.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '../forms/forms.module';


@NgModule({
  declarations: [
    TableViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    TableManagerRoutingModule,
  ],
  entryComponents: [
    TableViewComponent,
  ],
})
export class TableManagerModule { }
