import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



export class RunnerService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    queryRunner (runnerId:number) {
        var url = 'http://statistik.d-u-v.org/mgetresultperson.php?&runner=' + runnerId + '&Language=DE'
         return this.http.get(url).map(res => res.json());
    }
}