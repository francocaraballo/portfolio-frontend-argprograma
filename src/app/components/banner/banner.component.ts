import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  bannerText: string = 'Frase banner';
  urlImg: string = 'https://images.pling.com/img/00/00/62/84/47/1982032/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840x2400-1920x1080.jpg';
  photo: string = `url('${this.urlImg}')`;
 
}
