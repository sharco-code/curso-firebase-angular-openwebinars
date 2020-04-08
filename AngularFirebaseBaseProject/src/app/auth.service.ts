import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }
  
  user = this.auth.authState.pipe ( map( authState => {
    console.log('authState: ', authState);
    if(authState) return authState;
    else return null;

  } ))

   login() {
     console.log('login');
   }

   glogin() {
     console.log('google login');
     this.auth.signInWithPopup( new auth.GoogleAuthProvider() )
     .then( user => {
       console.log('user logado: ', user);
     })
     .catch( error => {
       console.log('error en google login: ', error);
     })
   }

   logout() {
     console.log('logout');
     this.auth.signOut();
   }

}
