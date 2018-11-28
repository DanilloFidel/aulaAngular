import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from 'src/app/_services/db.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {
  public email: string;
  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null)
  })
  constructor(
    private dbService: DbService
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.email = user.email;
    })
  }

  public registrarPublicacao(): void{
    this.dbService.registrarPublicacao({
      email: this.email,
      titulo: this.formulario.value.titulo
    })
  }

}
