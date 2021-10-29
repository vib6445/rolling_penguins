import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ExploreComponent } from './explore/explore.component';
import { MapComponent } from './map/map.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: 'map', component: MapComponent },
  { path: 'events', component: EventsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: '**', redirectTo: 'explore' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
