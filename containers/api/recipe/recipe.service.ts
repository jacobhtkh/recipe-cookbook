import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRecipeInputType } from './types/recipe';

@Injectable()
export class RecipeService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getRecipes() {
    return this.prisma.recipe.findMany();
  }

  createRecipe(data: CreateRecipeInputType) {
    return this.prisma.recipe.create({ data });
  }
}
