import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PassportModule } from "@nestjs/passport";
import { join } from "path";
import { AuthModule } from "../auth-service/ioc/auth.module";
import { AuthorModule } from "../author-service/ioc/author.module";
import { PostModule } from "../post-service/ioc/post.module";
import { UserModule } from "../user-service/ioc/user.module";
import { AuthResolver } from "./resolvers/auth.resolver";
import { AuthorResolver } from "./resolvers/author.resolver";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [
        AuthModule,
        AuthorModule,
        PostModule,
        UserModule,
        PassportModule.register({
            defaultStrategy: "JWT",
            session: false
        }),
        GraphQLModule.forRoot({
            debug: process.env.NODE_ENV === "dev" ? true : false,
            playground: true,
            autoSchemaFile: join(process.cwd(), "./graphql-api/schema.gql"),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            context: ({ req }) => ({ req }),
            // formatError: (error: GraphQLError) => {
            //     const graphqlFormattedError: GraphQLFormattedError = {
            //         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            //         message: error.extensions?.exception?.response?.message || error.message
            //         // status: error.extensions?.exception?.status,

            //     };
            //     return graphqlFormattedError;
            // }
        })
    ],
    controllers: [],
    providers: [
        AuthResolver,
        AuthorResolver,
        JwtStrategy
    ],
})
export class AppModule { }
