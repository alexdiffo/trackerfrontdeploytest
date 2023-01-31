import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { FleetComponent } from '../../pages/fleet/fleet.component';
import { NewFleetComponent } from '../../pages/newFleet/newFleet.component';
import { HistoryComponent } from '../../pages/history/history.component';
import { SecperimeterComponent } from '../../pages/secperimeter/secperimeter.component';
import { NewCarComponent } from '../../pages/new-car/new-car.component';
import { ModFleetComponent } from '../../pages/mod-fleet/mod-fleet.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'history',        component: HistoryComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'fleet',          component: FleetComponent },
    { path: 'new-fleet',      component: NewFleetComponent },
    { path: 'security-perimeter',   component: SecperimeterComponent },
    { path: 'new-car',              component: NewCarComponent },
    { path: 'modify-fleet',         component: ModFleetComponent },
];
