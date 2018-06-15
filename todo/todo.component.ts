import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public tasks:string;
  public works:any=[];
  
  public addlist(tasks){
    this.works.push(tasks);
    console.log(this.works);
  }
  public deletelist(i){
    this.works.splice(this.works.indexOf(i),1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
