import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoComponent } from './acesso.component';
import { BannerComponent } from './banner/banner.component';
import { CadastroComponent } from './cadastro/cadastro.component';

describe('AcessoComponent', () => {
  let component: AcessoComponent;
  let fixture: ComponentFixture<AcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AcessoComponent,
        BannerComponent,
        CadastroComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
