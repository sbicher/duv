import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Runner, YearPerformance} from '../../model/runner';
import {RunnerService} from '../../services/RunnerService';

@Component({
  selector: 'runner-details',
  templateUrl: 'runner-details.html',
  providers: [RunnerService]
})



export class RunnerDetailsPage {
	private runner : Runner;

  constructor(public navCtrl: NavController, public navParams: NavParams, private runnerService:RunnerService) {
  		this.runner = this.navParams.get("runner");
  		this.queryRunner(this.runner);
  }

  queryRunner (runner:Runner) {
  	 this.runnerService.queryRunner(runner.id).subscribe(
				data => {
                    console.log("Runner gefunden: " + data);

                    runner.racecount = data.PersonHeader.TotalEvtCnt;

                    var kmSumString = data.PersonHeader.TotalKm;
                    kmSumString = kmSumString.substring(0,kmSumString.indexOf(' '));
                    runner.km_sum = +kmSumString;

                    var minimumYear = 800000;

                    runner.yearOfBirth = data.PersonHeader.YOB;
                    runner.yearPerfs = new Array<YearPerformance>();

                    data.AllPerfs.forEach (function(yearPerf) {
                    	var yearPerformance = new YearPerformance();
                    	yearPerformance.year = yearPerf.Year;
                    	yearPerformance.raceCount = yearPerf.EvtCnt;
						runner.yearPerfs.push(yearPerformance);

						if (yearPerformance.year < minimumYear) {
							minimumYear = yearPerformance.year;
						}
                    });

                   
                    console.log("kmSum: " + runner.km_sum);
                    runner.km_sum_per_year = Math.floor( runner.km_sum/data.AllPerfs.length); //;
                    runner.races_since = minimumYear;
                },
                err => {
                    console.log(err);
                }
        	);
  }

  showYearDetails() {
  	// nix
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Runner-Dateils: '+ this.runner.firstname);
  }
}
