import { ContainerInterface, Job } from '@leebrooks3/react';
import { AccessToken, AccessTokenRepositoryInterface } from '@leebrooks3/typescript-oauth2';
import { Action, Dispatch } from 'redux';
import UserAccessTokenCreated from '../../Events/AccessToken/UserAccessTokenCreated';

export default class CreateUserAccessToken extends Job<AccessToken> {
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
     * Creates a user token via the repository.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<AccessToken> {
        const accessTokenRepository: AccessTokenRepositoryInterface = app.make('oauth2.accessTokenRepository');
        const token: AccessToken = await accessTokenRepository.createUserToken(this.email, this.password);

        await dispatch(new UserAccessTokenCreated(token));

        return Promise.resolve(token);
    }
}
