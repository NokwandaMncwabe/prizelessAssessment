import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';
import { User } from '../user';
import {FormGroup,FormBuilder,FormControl,Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 // user: User;
  name: string;
  phoneNumber: number;
  email: string;
  validation_form: FormGroup;
  errorMessage = '';
  successMessage = '';
  user: { name: String , email: String , password: String , phone: String}
  isName: boolean = false ; 
  isEmail: boolean = false ;


  
  constructor(private service: ServiceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resertForm() ;
  }

  register(value){


    if( value.name === '' || value.email === '' || value.password === ''  || value.phone ===''){
       this.isName = true ; 
       this.isEmail = false ; 
    }else {
      this.isName = false ; 
      
      this.service.register(value).then( res => {
      console.log('registered successfully');
      this.router.navigate(['/login']);
    }, err => {
      this.isEmail = true ;
    })
    }
    
  }

  resertForm(form?: NgForm) {
    if ( form != null){
       form.resetForm();
    }

    this.user = { name: '' , email: '' , password: '' , phone: ''}
  }


}
