import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    navigation: true,
    grabCursor: true,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 1500,
    },
    scrollbar: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
