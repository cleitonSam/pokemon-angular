import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonDetailsRouting } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';

const COMPONENTS = [PokemonDetailsComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, PokemonDetailsRouting],
})
export class PokemonDetailsModule {}
