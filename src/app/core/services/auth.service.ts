import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut, signInWithPopup
} from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import {LoginData} from "../interfaces/login-data.int";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login( {email, password}: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register( {email, password}: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
