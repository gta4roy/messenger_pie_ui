import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class AddressModel{
  name :string 
  id : string
  phone : string
  address : string 
  city : string
  pin : string 
}
@Injectable({
  providedIn: 'root'
})
export class AddAddressService {

  constructor(private httpCl : HttpClient) { }
  saveAddress(name :string ,phone :string , address: string ,city: string , pin :string){
    const addressObj : AddressModel = new AddressModel()
    addressObj.name = name 
    addressObj.phone = phone
    addressObj.address = address
    addressObj.city = city 
    addressObj.pin = pin
    addressObj.id = this.randomStr(8,"abcd1234")
    console.log(addressObj)

    return this.httpCl.post<AddressModel>('http://192.168.0.108:9098/api/v1/address/add/',{
        "id": addressObj.id,
        "name": addressObj.name,
        "phone": addressObj.phone,
        "address" : addressObj.address,
        "city": addressObj.city,
        "pin": addressObj.pin
    }).subscribe(data=>{
      console.log(data,"is what we got from the server")
    })  

  }

  randomStr(len: number , arr :string) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
} 
}
