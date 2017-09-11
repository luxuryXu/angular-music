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
  @ViewChild(Slides) slide: Slides;

  constructor(public navCtrl: NavController, private http: Http) {
  }

  ionViewDidLoad() {
      console.log('home ionDidLoad');
      this.http.get('/default/banner')
          .toPromise()
          .then((res) => {
              this.banners = JSON.parse(res['_body']).banners;
              console.log(this.banners);
          })
          .catch((err) => {
            console.log('获取banner失败' + err);
          })
  }

  slideChanged() {
    console.log('slideChanged');
  }

}
