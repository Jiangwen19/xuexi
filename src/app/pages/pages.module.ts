import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TableManagerModule } from './table-manager/table-manager.module';
import { DataRegisterComponent } from './data-manager/data-register/data-register.component';
import { DataDetailComponent } from './data-manager/data-view/data-view.component';
import { DataModifyComponent } from './data-manager/data-modify/data-modify.component';
import { CodeRegisterComponent } from './data-manager/code-register/code-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    TableManagerModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    DataRegisterComponent,
    DataDetailComponent,
    DataModifyComponent,
    CodeRegisterComponent,
  ],
})
export class PagesModule {
}
