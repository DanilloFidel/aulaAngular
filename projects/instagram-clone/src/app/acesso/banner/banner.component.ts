import { Component, OnInit } from '@angular/core';
import { ImageModel } from './image.model';
import { BANNERIMG } from 'src/app/_animations/animation-banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [BANNERIMG]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  public bannerImgs: ImageModel[] = [
    { estado: 'visivel', url: '/assets/banner/img_1.png'},
    { estado: 'escondido', url: '/assets/banner/img_2.png'},
    { estado: 'escondido', url: '/assets/banner/img_3.png'},
    { estado: 'escondido', url: '/assets/banner/img_4.png'},
    { estado: 'escondido', url: '/assets/banner/img_5.png'}
  ]

  constructor() { }

  ngOnInit() {
    this.timeOutBannerImg();
  }

  public timeOutBannerImg(): void{
    setTimeout(()=> this.rotationBannerImg(), 3000);
  }

  public rotationBannerImg(): void{
    let item: number;
    for(let i: number = 0; i<=4; i++){
      if(this.bannerImgs[i].estado === 'visivel'){
        this.bannerImgs[i].estado = 'escondido'
        item = i === 4 ? 0 : i + 1;
        break;
      }
    }

    this.bannerImgs[item].estado = 'visivel';
    setTimeout(()=> this.rotationBannerImg(), 3000);
  }

}
