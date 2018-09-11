import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
export default class Login extends Job {
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
     * Triggers the chain of actions to login.
     */
    handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void>;
}
//# sourceMappingURL=Login.d.ts.map