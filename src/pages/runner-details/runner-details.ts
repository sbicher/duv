import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Runner} from '../../app/runner';

@IonicPage()
@Component({
  selector: 'runner-details',
  templateUrl: 'runner-details.html',
})



export class RunnerDetailsPage {
	runner : Runner;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.runner = this.navParams.get("runner");
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Runner-Dateils: '+ this.runner.firstname);
  }
}
