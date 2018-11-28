import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  public registrarPublicacao(publicacao: any): void{
    firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
    .push( { titulo: publicacao.titulo })
  }
}
