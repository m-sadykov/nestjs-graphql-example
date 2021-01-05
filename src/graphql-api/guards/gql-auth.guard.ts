import { ExecutionContext, Injectable } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class GqlAuthGuard extends AuthGuard("JWT") {
    public canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const context = GqlExecutionContext.create(ctx);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { req } = context.getContext();
        return super.canActivate(new ExecutionContextHost([req]));
    }
}
