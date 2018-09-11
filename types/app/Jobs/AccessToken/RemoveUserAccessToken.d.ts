import { ContainerInterface, Job } from '@leebrooks3/react';
export default class RemoveUserAccessToken extends Job<void> {
    /**
     * Removes the access token from storage.
     */
    handle(app: ContainerInterface): Promise<void>;
}
//# sourceMappingURL=RemoveUserAccessToken.d.ts.map