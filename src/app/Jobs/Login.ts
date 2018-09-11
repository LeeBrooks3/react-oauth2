import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
import CreateUserAccessToken from './AccessToken/CreateUserAccessToken';

export default class Login extends Job {
    /**
     * The given email address.
     */
    private readonly email: string;

    /**
     * The given password.
     */
    private readonly password: string;

    /**
     * Sets the given email address and password.
     */
    public constructor(email: string, password: string) {
        super();

        this.email = email;
        this.password = password;
    }

    /**
     * Triggers the chain of actions to login.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void> {
        await dispatch(new CreateUserAccessToken(this.email, this.password));

        return Promise.resolve();
    }
}
