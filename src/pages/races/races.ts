import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalendarService} from '../../services/CalendarService';
import {Race} from '../../model/Race';
import {Settings} from '../../model/Settings';
import {RaceDetailsPage} from '../race-details/race-details'

@Component({
  selector: 'page-races',
  templateUrl: 'races.html',
  providers: [CalendarService, Settings]
})
export class RacesPage {
	private races : Array<Race>;
	private maxResultCount: number; // TODO: save in Settings
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams,private settings:Settings, private calendarService: CalendarService) {
  	// TODO: 'loading....'-Icon
  	this.races = [];
  	this.queryCalendar(this.races,settings);
  }

  queryCalendar(targetArray: Array<Race>, settings:Settings) {
        this.calendarService.queryCalendar(settings.raceCalendarCountry).subscribe(
				data => {
                    var count = 0;
                    var today = Date.now();

                    data.Races.forEach (function(race) {
						var dateAsString = race.Startdate;
						if (count > settings.maxRaceResultCount || dateAsString.length < 10) {
							return;
						}
	
						var dateParts = dateAsString.split("-");
						var raceDate = new Date(dateParts[0],(dateParts[1]-1), dateParts[2] );

						// TODO: Localization
						race.StartdateLocal = dateParts[2] + '.'+ dateParts[1] + '.' + dateParts[0];
						race.Label = race.StartdateLocal + ' ' + race.EventName;

						var diff = raceDate.getTime() - today;
						if (diff < 0 && !settings.showPastRacesInCalendar) {
							// race in the past
							return;
						}

						targetArray.push(race);
						count++;
					});

                },
                err => {
                    console.log(err);
                }
        	);
    }

    showRaceDetails (race:Race) {
    	console.log ('race: ' + race.EventName);
    	var raceDetailsParams = {"race":race};
        this.navCtrl.push(RaceDetailsPage,raceDetailsParams);
    	
    }
}
