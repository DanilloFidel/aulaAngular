import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/_models/usuario.model';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null),
    nome_completo: new FormControl(null),
    nome_usuario: new FormControl(null),
    senha: new FormControl(null)
  });
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public exibirPainelDeLogin(): void{
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void{
    if(this.formulario.valid){
      this.authService.cadastrarUsuario(this.criarNovoUsuario())
      .then((resposta)=>{
        console.log(resposta)
        this.exibirPainelDeLogin();
      });
    }
  }

  public criarNovoUsuario(): Usuario{
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    return usuario;
  }

}
