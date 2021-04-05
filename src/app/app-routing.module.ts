import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecipeComponent } from './page/list-recipe/list-recipe.component';
import { HomeComponent } from './page/home/home.component';
import { ViewRecipeComponent } from './page/view-recipe/view-recipe.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./page/list-recipe/list-recipe.module').then(
        (mod) => mod.ListRecipeModule
      ),
  },
  { path: 'not-found', component: PageNotFoundComponent, pathMatch: 'full' },
  
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}