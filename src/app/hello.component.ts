import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './app.component';
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() data;
  @Input() user_data : User;
  @Output() valueChange = new EventEmitter(); // emiiter
  counter = 0;
  handle_click(){
    this.counter++;
    this.valueChange.emit(this.counter); // emits data count, parent component can receive this data by listening to it , check app.component.html 
  }

}

