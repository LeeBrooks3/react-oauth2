import { CacheInterface, ContainerInterface, Job } from '@leebrooks3/react';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
import { Action, Dispatch } from 'redux';
import UserAccessTokenRestored from '../../Events/AccessToken/UserAccessTokenRestored';

export default class RestoreUserAccessToken extends Job<AccessToken> {
    /**
     * Restores the access token from storage.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<AccessToken> {
        const cache: CacheInterface = app.make('cache');
        const token: AccessToken = await cache.get('oauth2.accessToken');

        if (!token) {
            return Promise.reject();
        }

        dispatch(new UserAccessTokenRestored(token));

        return Promise.resolve(token);
    }
}
