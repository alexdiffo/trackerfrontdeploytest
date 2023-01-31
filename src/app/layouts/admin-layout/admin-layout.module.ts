import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FleetComponent } from '../../pages/fleet/fleet.component';
import { NewFleetComponent } from '../../pages/newFleet/newFleet.component';
import { HistoryComponent } from '../../pages/history/history.component';
import { SecperimeterComponent } from '../../pages/secperimeter/secperimeter.component';
import { NewCarComponent } from '../../pages/new-car/new-car.component';
import { ModFleetComponent } from '../../pages/mod-fleet/mod-fleet.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    NotificationsComponent,
    IconsComponent,
    MapsComponent,
    FleetComponent,
    NewFleetComponent,
    HistoryComponent,
    SecperimeterComponent,
    NewCarComponent,
    ModFleetComponent
  ]
})

export class AdminLayoutModule {}
