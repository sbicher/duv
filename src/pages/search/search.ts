import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchService} from '../../services/SearchService';


/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
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
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
        	);


    }
}
