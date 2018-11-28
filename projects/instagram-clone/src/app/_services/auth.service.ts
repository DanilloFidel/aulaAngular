import { Usuario } from "../_models/usuario.model";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
  public token_id: string;
  public possuiToken: boolean;

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
        sessionStorage.setItem('#', idToken);
        this.router.navigate(['/home']);
      })
    })
    .catch((error: Error)=> console.log(error))
  };

  private setTokenId(token: string): void{
    this.token_id = token;
    this.possuiToken = true;
  };

  public estaAutenticado(): boolean{
    this.getTokenStorage();
    return this.token_id !== undefined;
  }

  private getTokenStorage(): void{
    let token = sessionStorage.getItem("#");
    if( token !== null){
      this.setTokenId(token);
    }
  }

  public logout(): void{
    this.router.navigate(['']);
    firebase.auth().signOut()
    .then(()=>{
      sessionStorage.removeItem("#");
      this.token_id = undefined;
    })
  }

}
