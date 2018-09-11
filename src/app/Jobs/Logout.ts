import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
import RemoveUserAccessToken from './AccessToken/RemoveUserAccessToken';

export default class Logout extends Job {
    /**
     * Triggers the chain of actions to logout.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void> {
        await dispatch(new RemoveUserAccessToken());

        return Promise.resolve();
    }
}
