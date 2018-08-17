import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../../shared/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  isOpen = false;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('btnMenu') btnMenu: ElementRef;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.selectedRecipe = this.recipeService.getRecipes()[+params['id']];
    });
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event) {
    if (!this.menu.nativeElement.contains(event.target) && !this.btnMenu.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
