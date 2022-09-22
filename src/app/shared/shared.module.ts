import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        TabsComponent,
        PaginatorComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    PaginatorComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
