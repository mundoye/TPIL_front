import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormControl } from  '@angular/forms';
import * as Highcharts from "highcharts";
import { Options } from "highcharts";
import * as firebase from "firebase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prévision Réseaux et PFS';
  login: any;
  inputlogin: any;
  constructor() { 
    const firebaseConfig = {
      apiKey: "AIzaSyA0DUhyvK4Kr4G_T3jhQaQW9jaImYfQkQ8",
      authDomain: "tdbprev.firebaseapp.com",
      projectId: "tdbprev",
      storageBucket: "tdbprev.appspot.com",
      messagingSenderId: "1036272470416",
      appId: "1:1036272470416:web:ea3138adc893e905be4b15"
    };
    firebase.default.initializeApp(firebaseConfig)
  }
  ngOnInit() {
    this.inputlogin = new FormGroup({
        emailid: new FormControl(),
        passwd: new FormControl()
    });}
}
