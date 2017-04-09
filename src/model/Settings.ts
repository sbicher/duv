export class Settings {
	
	public raceCalendarCountry: string;
	public maxRaceResultCount: number;
	public showPastRacesInCalendar: boolean; // show races from the past in the calendar?

	// TODO: read from user
	constructor() {
         this.raceCalendarCountry = 'GER';
         this.maxRaceResultCount = 20;
         this.showPastRacesInCalendar = false;
    }
}