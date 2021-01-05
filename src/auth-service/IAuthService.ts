import { AuthPayload } from "./model/contract/AuthPayload";

export interface IAuthService {
    login(userName: string, password: string): Promise<AuthPayload>
}
