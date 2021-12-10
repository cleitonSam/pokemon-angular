import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AnimationLottieComponent } from './modules/animation-lottie/animation-lottie.component';
import { HomePokemonComponent } from './modules/home-pokemon/home-pokemon.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent, AnimationLottieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
