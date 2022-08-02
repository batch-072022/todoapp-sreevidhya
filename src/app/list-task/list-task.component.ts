import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //users!:any;
  users=[
    {id:1,name:"vidhya",email:"vidhya@gmail.com",status:"Pending"},
    {id:2,name:"kanna",email:"vidhya@gmail.com",status:"Pending"}

  ]
  tasks = [

    {id:1, name:"Install java", status:"completed"},
  
    {id:2, name:"Instaqll nodejs", status:"pending"},
  
  ]
  deleteUser(){
    alert("Succesfully Deleted")
  }

}
