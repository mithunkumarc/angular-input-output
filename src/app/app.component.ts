import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = [1, 2, 'test']; // sending array to child : hello component 
  user : User = {name : 'rajat', age : 23 , isActive : true}; // sending object
  count = 0;

  //listening to child component
  something_happened(count_data){
      console.log('count data ',count_data);
      this.count = count_data;
  }
}



export interface User{
  name : string;
  age : number;
  isActive : boolean;
}