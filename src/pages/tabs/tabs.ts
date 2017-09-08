import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { MyMusicPage } from '../my-music/my-music';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '发现音乐',
        tabIcon: 'ios-home-outline'
      },
      {
        root: MyMusicPage,
        tabTitle: '我的音乐',
        tabIcon: 'ios-musical-notes-outline'
      },
      {
        root: SettingPage,
        tabTitle: '账号',
        tabIcon: 'ios-person-outline'
      },
    ];
  }
}
