import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-impressum',
  templateUrl: 'impressum.html',
})



export class ImpressumPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad impressum: '+ this.navParams);
  }
}
