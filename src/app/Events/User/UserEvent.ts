import { Event } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';

export default abstract class UserEvent extends Event {
    /**
     * The user.
     */
    public readonly user: ModelInterface;

    /**
     * Sets the user.
     */
    public constructor(user: ModelInterface) {
        super();

        this.user = user;
    }
}
