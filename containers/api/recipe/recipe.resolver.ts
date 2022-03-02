import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateRecipeInputType,
  RecipeObjectType,
  RecipeResponse,
} from './types/recipe';
import { RecipeService } from './recipe.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../shared/guards/auth';
import { Recipe } from '@prisma/client';

@Resolver()
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => [RecipeObjectType], { description: 'Get all recipes' })
  // @UseGuards(AuthGuard({ permissions: ['get:recipes'] }))
  async getRecipes(): Promise<Recipe[]> {
    return this.recipeService.getRecipes();
  }

  @Mutation(() => RecipeResponse, { description: 'Create a new recipe' })
  async createRecipe(
    @Args('recipe') recipe: CreateRecipeInputType
  ): Promise<RecipeResponse> {
    const createdRecipe: any = await this.recipeService.createRecipe(recipe);
    return { recipe: createdRecipe };
  }
}
