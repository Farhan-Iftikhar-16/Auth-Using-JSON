import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import credentials from '../../../../credentials.json';
import {Router} from "@angular/router";
import messages from '../../../../messages.json';
import {ToastService} from "../../toast.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  msg: boolean = false;
  toggle:boolean= false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    ) { 
  
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }
  

  
 

  onSignInClicked(): void {
    if (this.form.invalid) {
      this.msg = true;
      setTimeout(function(){
        this.toggle = true;
        }, 2000);
      
      return;
    }
   
      setTimeout(function(){
      this.toggle = true;
      }, 2000);
    

    const formValue = this.form.value;

    if (formValue.username !== credentials.username) {
      this.msg = true;
     
      return;
    }

    if (formValue.password !== credentials.password) {
    
      return;
    }

    localStorage.setItem('user', JSON.stringify({firstName: credentials.firstName, lastName: credentials.lastName, username: credentials.username}));
    setTimeout(() => {
     
      this.router.navigate(['/user/dashboard']).then();
    }, 500);
  }

 

}
