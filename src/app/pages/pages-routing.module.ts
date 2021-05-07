import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { TableRegisterComponent } from './table-manager/table-register/table-register.component';
import { TableViewComponent } from './table-manager/table-view/table-view.component';
import { TableLoadComponent } from './table-manager/table-load/table-load.component';
import { DataDetailComponent } from './data-manager/data-view/data-view.component';
import { DataRegisterComponent } from './data-manager/data-register/data-register.component';
import { DataModifyComponent } from './data-manager/data-modify/data-modify.component';
import { CodeRegisterComponent } from './data-manager/code-register/code-register.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },

    {
      path: 'table-manager/table-view',
      loadChildren: () => import('./table-manager/table-manager.module')
        .then(m => m.TableManagerModule),
    },

    {
      path: 'table-view',
      component: TableViewComponent,
    },

    
    {
      path: 'table-load',
      component: TableLoadComponent,
    },

    {
      path: 'table-register',
      component: TableRegisterComponent,
    },

    {
      path: 'data-view',
      component: DataDetailComponent,
    },

    {
      path: 'data-register',
      component: DataRegisterComponent,
    },

    {
      path: 'data-modify',
      component: DataModifyComponent,
    },

    {
      path: 'code-register',
      component: CodeRegisterComponent,
    },


    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
