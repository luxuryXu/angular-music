import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  banners: Object[];
  activeText: String;
  newLists: Object[];
  privateContents: Object[];
  smallSize: Object;
  middleSize: Object;
  largeSize: Object;
  @ViewChild(Slides) slide: Slides;

  constructor(public navCtrl: NavController, private http: Http) {
      this.activeText = '个性推荐';
      this.smallSize = {
          width: 33
      }
      this.middleSize = {
          width: 49.75
      };
      this.largeSize = {
          width: 100
      };
  }

  ionViewDidLoad() {
      this.http.get('/default/banner')
          .toPromise()
          .then((res) => {
              this.banners = JSON.parse(res['_body']).banners;
          })
          .catch((err) => {
            console.log('获取banner失败' + err);
          });
      this.http.get('/default/top/playlist?limit=6&order=new')
          .toPromise()
          .then(res => {
              this.newLists = JSON.parse(res['_body']).playlists;
          })
          .catch(err => {
              console.log('获取推荐歌单失败' + err);
          });
      this.http.get('/default/personalized/privatecontent')
          .toPromise()
          .then(res => {
              this.privateContents = JSON.parse(res['_body']).result;
          })
          .catch(err => {
              console.log('获取独家放送失败' + err);
          })

  }

  slideChanged() {
  }

  tabClick($event) {
      this.activeText = $event.target.text;
  }

}
