import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { RacesPage } from '../pages/races/races';
import { DuvCupPage } from '../pages/duv-cup/duv-cup';
import { RunnerDetailsPage } from '../pages/runner-details/runner-details';
import { RaceDetailsPage } from '../pages/race-details/race-details';
import { ImpressumPage } from '../pages/impressum/impressum';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    RacesPage,
    DuvCupPage,
    RunnerDetailsPage,
    RaceDetailsPage,
    ImpressumPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    RacesPage,
    DuvCupPage,
    RunnerDetailsPage,
    RaceDetailsPage,
    ImpressumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
