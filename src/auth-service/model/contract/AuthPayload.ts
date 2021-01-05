import { User } from "../../../user-service/model/contract/User";

export interface AuthPayload {
    token: string;
    user: User;
}
