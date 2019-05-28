import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  url = 'https://restcountries.eu/rest/v2/all';
  database = firebase.database().ref('/users');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){

  }

  // Register method
  register(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  // Login method
  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }


  getApiInfo() {
    return this.http.get(this.url);
  }
}
