import { Component, Input } from '@angular/core';

/**
 * Generated class for the RecommendItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'recommend-item',
  templateUrl: 'recommend-item.html',
})
export class RecommendItem {
  @Input() data: Object;
  constructor() {

  }
}
