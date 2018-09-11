import { Event } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';
export default abstract class UserEvent extends Event {
    /**
     * The user.
     */
    readonly user: ModelInterface;
    /**
     * Sets the user.
     */
    constructor(user: ModelInterface);
}
//# sourceMappingURL=UserEvent.d.ts.map