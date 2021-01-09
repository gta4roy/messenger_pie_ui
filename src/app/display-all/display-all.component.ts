import { Component, OnInit } from '@angular/core';
import { ServiceAddressService } from '../service-address.service'
import { AddressModel } from '../add-address.service';
import { Subscription} from 'rxjs'
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  listOfAdresses : AddressModel[] = []
  private dbEventRecieve : Subscription = null
  constructor(private service: ServiceAddressService ) { 
  }

  ngOnInit(): void {
    this.dbEventRecieve = this.service.dbResponseRecieveEvent.subscribe(()=>{
      console.log("Event received from the server")
      this.listOfAdresses = this.service.getAllAddress()['book']
      console.log(this.listOfAdresses)
    })
  }

  getAll(){
    this.service.serverRequestToGetAll()
  }

}
