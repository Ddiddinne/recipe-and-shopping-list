import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './component/recipes/recipes.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './component/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent, pathMatch: 'full' },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
      ] },
    { path: 'shopping-list', component: ShoppingListComponent},
  ];
@NgModule({
 imports: [
     RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
