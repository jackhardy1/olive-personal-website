import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { PlayComponent } from './components/play/play.component';
import { WorkComponent } from './components/work/work.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'home', component: HomeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'play', component: PlayComponent },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CvComponent,
    HomeComponent,
    PhotographyComponent,
    PlayComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
