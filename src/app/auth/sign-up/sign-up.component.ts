import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  formData:any = {};
  constructor(private auth:SharedService,private router:Router) { }

  ngOnInit() {
    this.formData = {};

  }
  register(){
    console.log(this.formData);
    this.auth.register(this.formData).subscribe(
      (res)=>{
        this.router.navigate(['/login',{registered:'success'}]);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      })
  }
}
