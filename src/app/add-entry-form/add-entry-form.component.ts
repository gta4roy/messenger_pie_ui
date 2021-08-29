import { Component, OnInit } from '@angular/core';
import { AddAddressService } from '../add-address.service';

@Component({
  selector: 'app-add-entry-form',
  templateUrl: './add-entry-form.component.html',
  styleUrls: ['./add-entry-form.css']
})
export class AddEntryFormComponent implements OnInit {

  constructor(private service : AddAddressService) { }

  ngOnInit(): void {
  }

  saveMessage(event){
    event.preventDefault()
    const target = event.target;
    const message = target.querySelector('#messagebox').value
    const user = target.querySelector('input[name=user]:checked').value;
  
    console.log(user,message)
    this.service.saveMessage(user,message);

  }

}
