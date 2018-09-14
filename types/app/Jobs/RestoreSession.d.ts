import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
export default class RestoreSession extends Job {
    /**
     * Triggers the chain of actions to restore a session.
     */
    handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void>;
}
//# sourceMappingURL=RestoreSession.d.ts.map