import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Runner} from '../../app/runner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	console.log("Home initialisiert....");

var testJson = '{\
	"runners":[\
       	{\
            "lastname": "Schulze",\
			"firstname": "Ingo",\
			"age": 60,\
			"raceCount": 666\
        }\
    ]\
}'
/*
  	var testJson = '{\
              "lastname": "Schulze",\
			"firstname": "Ingo",\
			"age": 60,\
			"raceCount": 666\
			}';
*/
	var myResult = JSON.parse(testJson);
	//myRunner.copyInto (testJson);

	console.log("Mein Name: " + myResult.runners.length);

  }

}
