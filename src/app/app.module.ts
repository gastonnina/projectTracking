import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CalendarModule } from 'angular2-calendar';

import { AppComponent }   from './app.component';
import { ReleaseDetailComponent }   from './components/releaseDetail/releaseDetail.component';
import { ReleaseListComponent }   from './components/releaseList/releaseList.component';
import { ReleaseCalendarComponent }   from './components/releaseCalendar/releaseCalendar.component';
import { TeamMemberComponent }   from './components/teamMember/teamMember.component';

import { FilterRelease } from './pipes/filterRelease';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    HttpModule,
    ChartsModule,
    CalendarModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'D:/androidProjects/projectTracking-Webpack/dist', component: ReleaseListComponent },
      { path: 'D:/D:/androidProjects/projectTracking-Webpack/dist', component: ReleaseListComponent },
      { path: 'android_asset/www/', component: ReleaseListComponent },
      { path: '', component: ReleaseListComponent },
      { path: 'teamMember', component: TeamMemberComponent },
      { path: 'releaseCalendar', component: ReleaseCalendarComponent },
      { path: 'releaseDetail/:id', component: ReleaseDetailComponent },
      { path: ':id', component: ReleaseDetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ReleaseDetailComponent,
    ReleaseListComponent,
    ReleaseCalendarComponent,
    TeamMemberComponent,
    FilterRelease
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
