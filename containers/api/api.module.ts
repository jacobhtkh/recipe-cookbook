import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { RecipeModule } from "./recipe/recipe.module";

@Module({
  imports: [
    RecipeModule,
    GraphQLModule.forRoot({
      playground: process.env.PLAYGROUND_ENABLED === "true",
      autoSchemaFile: join(process.cwd(), "schema.gql"),
      sortSchema: true,
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return { request: req };
      },
    }),
  ],
})
export class APIModule {}
