import { Component } from '@angular/core';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';
import { DisplayAllComponent } from './display-all/display-all.component';


function log(target , name , descriptor ){
  console.log(target,name,descriptor)

  var original = descriptor.value
  descriptor.value = function(){
    console.log("This function was hacked !")
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AddressBook';

  constructor(){
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod(){
    console.log("Hey there")
  }
}
