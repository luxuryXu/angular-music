import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad() {
      this.http.get('/default/banner')
          .toPromise()
          .then((res) => {
            console.log(JSON.parse(res._body).banners);
          })
          .catch((err) => {
            console.log('获取banner失败' + err);
          })
  }

}
