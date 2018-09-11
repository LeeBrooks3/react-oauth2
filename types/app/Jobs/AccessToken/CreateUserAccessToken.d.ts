import { ContainerInterface, Job } from '@leebrooks3/react';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
import { Action, Dispatch } from 'redux';
export default class CreateUserAccessToken extends Job<AccessToken> {
    /**
     * The given email address.
     */
    private readonly email;
    /**
     * The given password.
     */
    private readonly password;
    /**
     * Sets the given email address and password.
     */
    constructor(email: string, password: string);
    /**
     * Creates a user token via the repository.
     */
    handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<AccessToken>;
}
//# sourceMappingURL=CreateUserAccessToken.d.ts.map