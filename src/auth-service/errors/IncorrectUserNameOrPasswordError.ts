export class IncorrectUserNameOrPasswordError extends Error {
    constructor() {
        super("Incorrect username or password");
    }
}
