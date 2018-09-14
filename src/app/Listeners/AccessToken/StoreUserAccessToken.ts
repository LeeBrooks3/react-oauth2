import { CacheInterface, ContainerInterface, Listener } from '@leebrooks3/react';
import { Dispatch } from 'redux';
import AccessTokenEvent from '../../Events/AccessToken/AccessTokenEvent';

export default class StoreUserAccessToken extends Listener<void> {
    /**
     * Sets the access token in storage.
     */
    public async handle(event: AccessTokenEvent, app: ContainerInterface, dispatch: Dispatch): Promise<void> {
        const cache: CacheInterface = app.make('cache');

        return cache.set('oauth2.accessToken', event.accessToken.getAttributes());
    }
}
