import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePokemonComponent } from './home-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePokemonRoutingModule {}
