import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePokemonComponent } from './home-pokemon.component';
import { HomePokemonRoutingModule } from './home-pokemon-routing.module';
import { AnimationLottieComponent } from '../animation-lottie/animation-lottie.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const COMPONENTS = [HomePokemonComponent, AnimationLottieComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    HomePokemonRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class HomePokemonModule {}
