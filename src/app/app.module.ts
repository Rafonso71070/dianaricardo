import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TravelComponent } from './travel/travel.component';
import { StaysComponent } from './stays/stays.component';
import { FaqComponent } from './faq/faq.component';
import { RegistryComponent } from './registry/registry.component';
import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  component: LandingPageComponent },
  { path: 'schedule', component: ScheduleComponent},
  { path: 'travel', component: TravelComponent},
  { path: 'stays', component: StaysComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'registry', component: RegistryComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ScheduleComponent,
    TravelComponent,
    StaysComponent,
    //SongRequestComponent,
   // GalleryComponent,
    FaqComponent,
    TopNavComponent,
    RegistryComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  //providers: [SongRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
