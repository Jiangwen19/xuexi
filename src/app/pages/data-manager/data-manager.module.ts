import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbInputModule } from "@nebular/theme";
import { CodeRegisterComponent } from "./code-register/code-register.component";
import { DataManagerRoutingModule } from "./data-manager-routing.module";
import { DataModifyComponent } from "./data-modify/data-modify.component";
import { DataRegisterComponent } from "./data-register/data-register.component";



@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      FormsModule,
      NbInputModule,
      DataManagerRoutingModule,
    ],
    entryComponents: [
      DataRegisterComponent,
      DataModifyComponent,
      CodeRegisterComponent
    ],
  })
  export class DataManagerModule { }
  