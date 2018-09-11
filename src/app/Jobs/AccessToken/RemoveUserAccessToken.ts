import { CacheInterface, ContainerInterface, Job } from '@leebrooks3/react';

export default class RemoveUserAccessToken extends Job<void> {
    /**
     * Removes the access token from storage.
     */
    public async handle(app: ContainerInterface): Promise<void> {
        const cache: CacheInterface = app.make('cache');

        return cache.remove('oauth2.accessToken');
    }
}
