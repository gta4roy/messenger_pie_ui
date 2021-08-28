import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AddressModel } from './add-address.service';
import { Subject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ServiceAddressService {

  addressListFromServer : AddressModel[] = []
  constructor(private httpCl : HttpClient) { }

  private dbResponseRecievedSubject = new Subject<void>();
  public dbResponseRecieveEvent = this.dbResponseRecievedSubject.asObservable()

  serverRequestToGetAll(){
    console.log("Sending request to server to fetch all the values")
    this.httpCl.get<AddressModel[]>('http://127.0.0.1:9098/api/v1/message/getall/').subscribe(data =>{
      //console.log("We Got ",data)
      this.addressListFromServer = data;
      this.dbResponseRecievedSubject.next()
      console.log("Send Event to UI to publish the UI Values ")
    })
  }

  getAllAddress(){
    console.log(this.addressListFromServer)
    return this.addressListFromServer
  }

}
