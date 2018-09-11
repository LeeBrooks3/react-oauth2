import { ListenerInterface } from '@leebrooks3/react';
import GetUser from '../../Listeners/AccessToken/GetUser';
import AccessTokenEvent from './AccessTokenEvent';

export default class UserAccessTokenRestored extends AccessTokenEvent {
    /** @inheritDoc */
    public getListeners(): ListenerInterface[] {
        return [
            new GetUser(),
        ];
    }
}
