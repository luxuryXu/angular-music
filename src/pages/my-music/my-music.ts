import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the MyMusicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-music',
  templateUrl: 'my-music.html',
})
export class MyMusicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter MyMusicPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMusicPage');
    this.http.get('/default/search?keywords=海阔天空')
      .toPromise()
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      })
  }

}
