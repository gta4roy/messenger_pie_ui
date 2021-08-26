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

  saveAddress(event){
    event.preventDefault()
    const target = event.target;
    const name = target.querySelector('#name').value
    const address = target.querySelector('#address').value
    const phone = target.querySelector('#phone').value
    const city = target.querySelector('#city').value
    const pin = target.querySelector('#pin').value
    console.log(name,address,phone,city,pin)
    this.service.saveAddress(name,phone,address,city,pin);

  }

}
