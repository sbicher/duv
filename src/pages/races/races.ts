import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalendarService} from '../../services/CalendarService';
import {Race} from '../../model/Race';

@Component({
  selector: 'page-races',
  templateUrl: 'races.html',
  providers: [CalendarService]
})
export class RacesPage {
	private races : Array<Race>;
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarService: CalendarService) {
  	// TODO: 'loading....'-Icon
  	this.races = JSON.parse(`
	{
		"races":[{
			"EventName": "Rennen 1",
			"EventDateLocal": "01.01.2014"
		},
		{
			"EventName": "Rennen 2",
			"EventDateLocal": "02.01.2014"
		},
		{
			"EventName": "Letztes Rennen ",
			"EventDateLocal": "18.09.2017"
		}
		]
	}

		`).races;

  	this.queryCalendar();
  }

  queryCalendar() {
        this.calendarService.queryCalendar('GER').subscribe(
				data => {
                    console.log("found data: " + data);

                    data.Races.forEach (function(race) {
						var dateAsString = race.Startdate;
						if (dateAsString.length < 10) {
							return;
						}
	
						var dateParts = dateAsString.split("-");
						var raceDate = new Date(dateParts[0],(dateParts[1]-1), dateParts[2] );
						
		//				var diff = raceDate - today;
		
						//if (diff > 0 && diff < maxDiffInMillis) {	
						var raceDateFormatted = dateParts[2] + '.'+ dateParts[1] + '.' + dateParts[0];
						console.log (raceDateFormatted + ' ' + race.Results);
						//	}
					});

                },
                err => {
                    console.log(err);
                },
                () => console.log('Suche wurde beendet...')
        	);
    }
}
