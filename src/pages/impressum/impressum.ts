import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Runner} from '../../app/runner';

@Component({
  selector: 'page-impressum',
  templateUrl: 'impressum.html',
})



export class ImpressumPage {
	//declare var runner : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad impressum: '+ this.navParams);
  }
}
