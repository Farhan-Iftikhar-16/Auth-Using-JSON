import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { Tab1DetailsComponent } from './tab1-details/tab1-details.component';
import { Tab2DetailsComponent } from './tab2-details/tab2-details.component';
import { Tab3DetailsComponent } from './tab3-details/tab3-details.component';
import { Tab4DetailsComponent } from './tab4-details/tab4-details.component';


@NgModule({
  declarations: [

    HomeComponent,
    DashboardComponent,
    UserWrapperComponent,
    ItemDetailsComponent,
    Tab1DetailsComponent,
    Tab2DetailsComponent,
    Tab3DetailsComponent,
    Tab4DetailsComponent,

  
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ]
})
export class UserModule {
}
