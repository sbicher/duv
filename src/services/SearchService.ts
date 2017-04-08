import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


export class SearchService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    search (searchText) {
        // mögliche Header
        //let headers = new Headers({  'Content-Type': 'text/plain; charset=dropbox-cors-hack' });
        //let options = new RequestOptions({ });
      

        // Link von Dropbox und dann dl=0 mit dl=1 und www.dropbox.com mit dl.dropboxusercontent.com ersetzen
    var url='https://dl.dropboxusercontent.com/s/7ezft08k9yaj550/runner_result.json?dl=1';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}