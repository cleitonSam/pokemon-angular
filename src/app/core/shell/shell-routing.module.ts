import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../modules/home-pokemon/home-pokemon.module').then(
        (m) => m.HomePokemonModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('../../modules/pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
