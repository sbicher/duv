import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchService} from '../../services/SearchService';
import { RunnerDetailsPage } from '../runner-details/runner-details';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
 providers: [SearchService]
})
export class SearchPage {
	searchText : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchService: SearchService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }


  startSearch() {
        console.log('starting search: ' + this.searchText);
      console.log ("service: " + this.searchService);

        this.searchService.search(this.searchText).subscribe(
				data => {
                    console.log("found data: " + data);

                    // immer den letzten zurückgeben
                    var foundRunner = data.runners[data.runners.length - 1];

              //      ImpressumPage.runner.lastname = 'theo';

            // ImpressumPage.runner = 'test';
            	//var runner = data;
          // 	console.log("data: " + data.firstname);
            	var runnerDetailsParams = {"runner":foundRunner};
                    this.navCtrl.push(RunnerDetailsPage,runnerDetailsParams);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Suche wurde beendet...')
        	);


    }
}
