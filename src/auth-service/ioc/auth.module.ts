import { Module } from "@nestjs/common";
import { UserModule } from "../../user-service/ioc/user.module";
import { AuthService } from "../auth.service";
import { AUTH_SERVICE } from "./ioc";

@Module({
    imports: [UserModule],
    providers: [
        {
            provide: AUTH_SERVICE,
            useClass: AuthService
        }
    ],
    exports: [
        {
            provide: AUTH_SERVICE,
            useClass: AuthService
        }
    ]
})
export class AuthModule {}
