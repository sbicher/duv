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


                    //  always use the last found runner (demo data)
                    var foundRunner = data.runners[data.runners.length - 1]; // TODO: show selection page
	
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
