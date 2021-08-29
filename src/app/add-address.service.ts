import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class AddressModel{
  message :string 
  date : string
  user : string
  id : string
}
@Injectable({
  providedIn: 'root'
})
export class AddAddressService {

  constructor(private httpCl : HttpClient) { }
  saveMessage(user :string ,message :string){
    const addressObj : AddressModel = new AddressModel()
    addressObj.message = message 
    addressObj.date = new Date().toISOString()
    addressObj.user = user
    addressObj.id = this.randomStr(8,"abcd1234")
    console.log(addressObj)

    return this.httpCl.post<AddressModel>('http://192.168.0.104:9098/api/v1/message/add/',{
        "message": addressObj.message,
        "date": addressObj.date,
        "user": addressObj.user,
        "id" : addressObj.id,
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
