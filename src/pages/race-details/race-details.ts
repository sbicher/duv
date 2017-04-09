import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Race} from '../../model/Race';

@Component({
  selector: 'race-details',
  templateUrl: 'race-details.html',
})


/**
 * Details of a race like the date, the event location, ....
 */
export class RaceDetailsPage {
	private race : Race;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.race = this.navParams.get("race");
  		console.log("Race hier: " + this.race)
  }
}
