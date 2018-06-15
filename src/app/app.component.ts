import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private username:string="Test";
  private currentUser:User={username:"Amit",email:"test@test.com"};
  private hideEmail:boolean=false;
  private disabledInput:boolean=false;
  public userName:string="Amit Singh";
//public showDiv:boolean=false;

  private isDisabled():boolean{
  return this.disabledInput;
  }

    private isBlueBg:boolean=true
    private bgColor:string='red'
    private getUsername():string{
    return this.currentUser.username
  }
}

interface User{//defines the type
  username:string,
  email:string
}
