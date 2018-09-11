import { ContainerInterface, Job } from '@leebrooks3/react';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
import { Action, Dispatch } from 'redux';
export default class RestoreUserAccessToken extends Job<AccessToken> {
    /**
     * Restores the access token from storage.
     */
    handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<AccessToken>;
}
//# sourceMappingURL=RestoreUserAccessToken.d.ts.map