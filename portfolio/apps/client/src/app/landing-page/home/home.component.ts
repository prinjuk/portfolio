import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import  { SwiperOptions  } from 'swiper';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { type: 'fraction'}, 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
