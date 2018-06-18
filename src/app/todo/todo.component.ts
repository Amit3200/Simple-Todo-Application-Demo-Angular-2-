import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  public tasks:string;
  public works:any=[];
  public proedit:boolean=true;
  public k:any;
  public taskedit:string="";

  public addlist(tasks){
    this.works.push(tasks);
    console.log(this.works);
    this.tasks="";
  }

  public deletelist(i){
    this.works.splice(this.works.indexOf(i),1);
  }

  public editlist(element){
    this.k=this.works.indexOf(element);
    this.proedit=!this.proedit;
    console.log(this.k);
  }

  public makechange(taskedit1){
    this.works[this.k]=taskedit1;
    this.taskedit="";
    console.log(this.taskedit)
  }
  constructor() { }

  ngOnInit() {
  }

}
