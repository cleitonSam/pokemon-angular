import { HomePokemonComponent } from './home-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePokemonRoutingModule } from './home-pokemon-routing.module';

const COMPONENTS = [HomePokemonComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, HomePokemonRoutingModule],
})
export class HomePokemonModule {}
