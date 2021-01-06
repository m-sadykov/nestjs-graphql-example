import { Catch, HttpException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { IncorrectUserNameOrPasswordError } from "../../auth-service/errors/IncorrectUserNameOrPasswordError";
import { IncorrectUserNameOrPasswordHttpException } from "../exceptions/IncorrectUserNameOrPasswordHttpException";

@Catch(IncorrectUserNameOrPasswordError)
export class BadRequestExceptionFilter implements GqlExceptionFilter {
    public catch(exception: GraphQLError) {
        let httpException: HttpException;

        if (exception instanceof IncorrectUserNameOrPasswordError) {
            httpException = new IncorrectUserNameOrPasswordHttpException();
        }
        
        return httpException;
    }
}
