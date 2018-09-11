import { ContainerInterface, Job } from '@leebrooks3/react';
import { Action, Dispatch } from 'redux';
export default class Logout extends Job {
    /**
     * Triggers the chain of actions to logout.
     */
    handle(app: ContainerInterface, dispatch: Dispatch<Action>): Promise<void>;
}
//# sourceMappingURL=Logout.d.ts.map