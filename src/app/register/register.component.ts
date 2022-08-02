import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {
  router: any;



  constructor() { }



  ngOnInit(): void {

  }

  onSubmit(){

    alert("Registration is successful");

    this.router.navigateByUrl("/login")

  }
}