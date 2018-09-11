import { ConfigInterface, ContainerInterface } from '@leebrooks3/react';
import { AccessTokenRepository } from '@leebrooks3/typescript-oauth2';
import Client from './Http/Clients/Client';

export default {
    accessTokenRepository: (container: ContainerInterface) => {
        const config: ConfigInterface = container.make('config');

        return new AccessTokenRepository(container.make('oauth2.client'), config.get('oauth2.tokenEndpoint'));
    },
    client: (container: ContainerInterface) => {
        return new Client(container.make('config'));
    },
};
