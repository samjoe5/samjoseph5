import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
email1:any;
password1:any;
errorMsg = null
successMsg =null;
error_Type = null;
emailerType = null;


storedata(){
   
 this.errorMsg = null
this.successMsg =null;
this.error_Type = null;
this.emailerType = null;


    // let samjo = this.email1;
    // let joseph = this.password1;
    // console.log(samjo)
    // console.log(this.password1);

if(!this.email1){
  this.errorMsg = "please enter email-id";
  this.error_Type = "emailerType";
  return false;
}else if (this.email1 != null){
  this.successMsg = "Correct email address";
  return false;
}else if(this.password1.length <= 8){
  this.error_Type = "passerType";
  this.errorMsg = "Please enter atleast 8 char.";
  return false;
}

    this.email1 = null;
    this.password1 = null;

}

}
