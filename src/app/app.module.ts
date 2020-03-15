import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MapComponent } from './map/map.component';
import { MahaveerComponent } from './mahaveer/mahaveer.component';
import { RanveerComponent } from './ranveer/ranveer.component';
import { RajendraComponent } from './rajendra/rajendra.component';
import { ListComponent } from './list/list.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    MapComponent,
    MahaveerComponent,
    RanveerComponent,
    RajendraComponent,
    ListComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path:"mahaveer",component:MahaveerComponent},
      {path:"list",component:ListComponent},
      {path:"ranveer",component:RanveerComponent},
      {path:"rajendra",component:RajendraComponent},
      {path:"emg",component:EmergencyComponent},
      {path:"map",component:MapComponent},
      {path:'',redirectTo:'map', pathMatch: 'full' }
     
       
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
