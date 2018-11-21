import { Component, OnInit } from '@angular/core';
import { BANNERENTER, PANELANIMATION } from '../_animations/animation-banner';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [BANNERENTER, PANELANIMATION]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public painelDeCadastro: boolean;
  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(evento: string): void{
    this.painelDeCadastro = evento === 'cadastro' ? true: false;
  }

}
