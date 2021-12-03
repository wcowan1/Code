
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { DataService} from './database.service';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private dataservice: DataService,
    public  Auth : Auth
  ) { }

  Register (value){
    return new Promise <any>((resolve, reject) =>{
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res=>resolve(res),
        err=> reject(err))
    })
  }

  Login(value){
    return new Promise<any> ((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  logOut(){
    return new Promise<void>((resolve,reject)=>{
      if (this.Auth.currentUser){
        this.Auth.signOut()
          .then(()=>
          {
            console.log("Sign Out");
            resolve();
          }).catch(()=>{
            reject()
          })
      }
    })
  }
}

  