import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
    private router: Router) { }

  doLogin(value): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigateByUrl('/images');
          resolve(res);
          //this.setAuth(res.user.email.split('@')[0]);
        }, err => reject(err));
    })
  }
}
