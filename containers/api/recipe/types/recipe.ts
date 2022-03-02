import { Field, InputType, ObjectType, Directive } from '@nestjs/graphql';
import { Recipe } from '@prisma/client';
import { IsString } from 'class-validator';

@ObjectType()
export class RecipeObjectType implements Recipe {
  @Field(() => String, { description: 'The id of the recipe' })
  id: string;

  @Directive(
    '@deprecated(reason: "This field will be removed in the next version")'
  )
  @Field(() => String, { description: 'The name of the recipe' })
  name: string;

  @Field(() => String, { description: 'The description of the recipe' })
  description: string;

  @Field(() => Date, { description: 'When the recipe was created' })
  createdAt: Date;

  @Field(() => Date, { description: 'When the recipe was updated' })
  updatedAt: Date;
}

@ObjectType()
export class RecipeResponse {
  @Field(() => RecipeObjectType, { description: 'The created recipe' })
  recipe: RecipeObjectType;
}

@InputType()
export class CreateRecipeInputType implements Partial<Recipe> {
  @IsString()
  @Directive(
    '@deprecated(reason: "This field will be removed in the next version")'
  )
  @Field(() => String, { description: 'The name of the recipe' })
  name: string;

  @Field(() => String, { description: 'The description of the recipe' })
  description: string;
}
