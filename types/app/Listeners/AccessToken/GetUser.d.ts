import { ContainerInterface, Listener } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';
import { Dispatch } from 'redux';
import UserAccessTokenCreated from '../../Events/AccessToken/UserAccessTokenCreated';
import UserAccessTokenRestored from '../../Events/AccessToken/UserAccessTokenRestored';
export default class GetUser extends Listener<ModelInterface> {
    /**
     * Retrieves the user of the access token from the given event.
     */
    handle(event: UserAccessTokenCreated | UserAccessTokenRestored, app: ContainerInterface, dispatch: Dispatch): Promise<ModelInterface>;
}
//# sourceMappingURL=GetUser.d.ts.map