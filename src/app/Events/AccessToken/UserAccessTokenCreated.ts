import { ListenerInterface } from '@leebrooks3/react';
import GetUser from '../../Listeners/AccessToken/GetUser';
import StoreUserAccessToken from '../../Listeners/AccessToken/StoreUserAccessToken';
import AccessTokenEvent from './AccessTokenEvent';

export default class UserAccessTokenCreated extends AccessTokenEvent {
    /** @inheritDoc */
    public getListeners(): ListenerInterface[] {
        return [
            new StoreUserAccessToken(),
            new GetUser(),
        ];
    }
}
