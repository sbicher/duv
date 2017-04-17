import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchService} from '../../services/SearchService';
import { RunnerDetailsPage } from '../runner-details/runner-details';
import { RunnerListPage } from '../runner-list/runner-list';



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
                    if (data.runners.length == 1) {
                      var foundRunner = data.runners[data.runners.length - 1]; // TODO: show selection page
	             	      var  detailPageParams = {"runner":foundRunner};
                      this.navCtrl.push(RunnerDetailsPage,detailPageParams);
                    } else {
                      var listPageParams = {"runners":data.runners};
                      this.navCtrl.push(RunnerListPage,listPageParams);
                    }
                },
                err => {
                    console.log(err);
                },
                () => console.log('Suche wurde beendet...')
        	);


    }
}
