import { Event } from '@leebrooks3/react';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
export default abstract class AccessTokenEvent extends Event {
    /**
     * The access token.
     */
    readonly accessToken: AccessToken;
    /**
     * Sets the access token.
     */
    constructor(accessToken: AccessToken);
}
//# sourceMappingURL=AccessTokenEvent.d.ts.map