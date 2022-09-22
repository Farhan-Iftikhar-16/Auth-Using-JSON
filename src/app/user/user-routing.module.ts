import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {UserWrapperComponent} from "./user-wrapper/user-wrapper.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import { Tab1DetailsComponent } from "./tab1-details/tab1-details.component";


const routes: Routes = [
  {
    path: '',
    component: UserWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
      path: 'tab1-details',
      component: Tab1DetailsComponent,
      },
      {
        path: 'item-details',
        component: ItemDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class UserRoutingModule {}
export const routingComponents=[DashboardComponent,HomeComponent]
