/**
 * Class representing a single race event, e.g. in the calendar
 */
export class Race {
	public EventID: number; // ID of the event in the DUV-statistics
	public EventName: string; // name of the event
	public Label: string; // Label for displaying the race in the UI
	public Edition: string; // number of repetition of the event (e.g. '3.')
	public City: string; // city, where the event is hold
	public Country: string; // country, where the event is hold
	public EventType: number; // enum for the type of the event (numbers from 1-6)
	public Results: string; // Link to the results
	public Length: string; // length of the race (in km)
	public Duration: string; // duration for Fixed-Hour-Races, e.g.  '6h'
	public IAULabel: string; // enum for the Label of the IAU (International Association of Ultrarunners); possible values: 'N' == 'None', 'B' == 'Bronze'
	public Startdate: string; // start date in the format 'yyyy-MM-dd'
	public StartdateLocal: string; // Localized start date of the event, e.g. 'dd.MM.yyyy' in Germany
	public Enddate: string; // start date in the format 'yyyy-MM-dd HH:mm:ss'
	public Year: number; // year of the race
	public Month: number; // month of the race (e.g. 4 == 'April')
	public Cupname: string; 
	public CupYear: string; 
}