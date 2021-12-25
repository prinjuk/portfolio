import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SwiperModule
  ]
})
export class LandingPageModule { }
