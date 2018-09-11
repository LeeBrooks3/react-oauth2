import { ConfigInterface } from '@leebrooks3/react';
import { Client as BaseClient } from '@leebrooks3/typescript-oauth2';

export default class Client extends BaseClient {
    /**
     * Configures the client from config.
     */
    public constructor(config: ConfigInterface) {
        super(config.get('oauth2.clientId'), config.get('oauth2.clientSecret'), config.get('oauth2.serverUrl'));
    }
}
