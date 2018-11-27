import { Usuario } from "../_models/usuario.model";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
  public token_id: string;

  constructor(private router: Router){}

  public cadastrarUsuario(usuario: Usuario): Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
    .then((resposta: any)=>{
      delete usuario.senha;
      firebase.database().ref(`usuarios/${btoa(usuario.email)}`)
      .set( usuario )
    })
    .catch((error: Error)=>{

    });
  };

  public autenticar(email: string, senha: string): void{
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((resposta: any)=> {
      console.log(resposta)
      firebase.auth().currentUser.getIdToken()
      .then((idToken)=> {
        this.setTokenId(idToken);
        this.router.navigate(['/home']);
      })
    })
    .catch((error: Error)=> console.log(error))
  };

  private setTokenId(token: string): void{
    this.token_id = token;
  };



}
