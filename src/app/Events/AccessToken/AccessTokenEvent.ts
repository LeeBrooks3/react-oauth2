import { Event } from '@leebrooks3/react';
import { AccessToken } from '@leebrooks3/typescript-oauth2';

export default abstract class AccessTokenEvent extends Event {
    /**
     * The access token.
     */
    public readonly accessToken: AccessToken;

    /**
     * Sets the access token.
     */
    public constructor(accessToken: AccessToken) {
        super();

        this.accessToken = accessToken;
    }
}
