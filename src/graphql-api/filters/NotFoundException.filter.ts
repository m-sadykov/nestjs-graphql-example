import { Catch, HttpException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { UserNotFoundError } from "../../user-service/errors/UserNotFoundException";
import { UserNotFoundHttpException } from "../exceptions/UserNotFoundHttpException";

@Catch(UserNotFoundError)
export class NotFoundExceptionFilter implements GqlExceptionFilter {
    public catch(exception: GraphQLError) {
        let httpException: HttpException;

        if (exception instanceof UserNotFoundError) {
            httpException = new UserNotFoundHttpException(exception.userName);
        }
        
        return httpException;
    }
}
