import { ContainerInterface, Listener } from '@leebrooks3/react';
import { Dispatch } from 'redux';
import AccessTokenEvent from '../../Events/AccessToken/AccessTokenEvent';
export default class StoreUserAccessToken extends Listener<void> {
    /**
     * Sets the access token in storage.
     */
    handle(event: AccessTokenEvent, app: ContainerInterface, dispatch: Dispatch): Promise<void>;
}
//# sourceMappingURL=StoreUserAccessToken.d.ts.map