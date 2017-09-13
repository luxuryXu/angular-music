import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { DirectivesModule } from '../directives/directives.module';
import { MyApp } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { MyMusicPage } from '../pages/my-music/my-music';
import { RecommendItem } from '../pages/recommend-item/recommend-item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const routes : Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'setting',
    component: SettingPage
  },
  {
    path: 'my-music',
    component: MyMusicPage
  }
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    MyMusicPage,
    RecommendItem
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DirectivesModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    SettingPage,
    MyMusicPage,
    RecommendItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
