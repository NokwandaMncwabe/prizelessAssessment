import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';
import { User } from '../user';
import {FormGroup,FormBuilder,FormControl,Validators, NgForm} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //User: user;
  email: String;
  password: String;
  user: {email: String, password: String}
  validation_form: FormGroup;

    /**
      User inputs validation(email and password)
   **/
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be atleast 6 characters long.' },
    ],
  };
  invalidEmail: boolean = false;
  invalidPass: boolean = false ;


  constructor(private service: ServiceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resertForm();

  }

  login(value){
    this.invalidEmail = false ; 
    this.invalidPass = false ;
    this.service.loginUser(value).then( res => {
      console.log('Logged in successfully');
      this.router.navigate(['/dashboard']);
    } , (err) => {
     
      console.log(err)
      if( err.code === 'auth/user-not-found') {
        this.invalidEmail = true ;
        console.log('invalid');
      }
      
      
      if( err.code === 'auth/wrong-password') {
        this.invalidPass = true ;
      }

    }
     
    )
  }

  resertForm(form?: NgForm) {
    if ( form != null){
       form.resetForm();
    }

    this.user = { email: '' , password: ''}
  }
  
}
