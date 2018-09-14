import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
import RestoreUserAccessToken from './AccessToken/RestoreUserAccessToken';

export default class RestoreSession extends Job {
    /**
     * Triggers the chain of actions to restore a session.
     */
    public async handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void> {
        await dispatch(new RestoreUserAccessToken());

        return Promise.resolve();
    }
}
