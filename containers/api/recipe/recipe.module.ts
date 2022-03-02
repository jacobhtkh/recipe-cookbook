import { Module } from "@nestjs/common";
import { RecipeResolver } from "./recipe.resolver";
import { RecipeService } from "./recipe.service";

@Module({
  providers: [RecipeService, RecipeResolver],
})
export class RecipeModule {}
