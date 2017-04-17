import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Runner} from '../../model/Runner';
import {RunnerDetailsPage} from '../runner-details/runner-details'

@Component({
  selector: 'page-runner-list',
  templateUrl: 'runner-list.html'
})
export class RunnerListPage {
	private runners : Array<Runner>;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.runners = this.navParams.get("runners");

  	this.runners.forEach (function(runner) {
  		var label = runner.lastname + ', ' + runner.firstname;
		if (runner.yearOfBirth != null) {
			label = label + ' (' + runner.yearOfBirth + ')';
		}

		runner.label = label;
	});
  }

   showRunnerDetails (runner:Runner) {
   		console.log('runnerhier: ' + runner);
    	var runnerDetailsParams = {"runner":runner};
        this.navCtrl.push(RunnerDetailsPage,runnerDetailsParams);
    }
}
