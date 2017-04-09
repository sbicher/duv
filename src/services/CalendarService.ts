import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


export class CalendarService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    queryCalendar (country) {
       var url = 'http://statistik.d-u-v.org/mcalendar.php?country=' + country;
      return this.http.get(url).map(res => res.json());;
    }
}