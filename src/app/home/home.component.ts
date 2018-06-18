import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userName:string="Amit Singh";
  public ShowDiv:boolean=false;
  private myarray:any=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
  public arrayIndex='';
  public ind:number;
  convertVar(x){
    console.log("function called");
    this.ind= parseInt(x);
    console.log(this.ind);

  }
  constructor(){ }
  ngOnInit() {
  }

}
