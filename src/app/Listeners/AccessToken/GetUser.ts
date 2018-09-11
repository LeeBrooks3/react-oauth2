import { ContainerInterface, Listener } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';
import { UserRepositoryInterface } from '@leebrooks3/typescript-oauth2';
import { Dispatch } from 'redux';
import UserAccessTokenCreated from '../../Events/AccessToken/UserAccessTokenCreated';
import UserAccessTokenRestored from '../../Events/AccessToken/UserAccessTokenRestored';
import UserRetrieved from '../../Events/User/UserRetrieved';

export default class GetUser extends Listener<ModelInterface> {
    /**
     * Retrieves the user of the access token from the given event.
     */
    public async handle(event: UserAccessTokenCreated|UserAccessTokenRestored, app: ContainerInterface, dispatch: Dispatch): Promise<ModelInterface> { // tslint:disable-line max-line-length
        const userRepository: UserRepositoryInterface<ModelInterface> = app.make('oauth2.userRepository');
        const user: ModelInterface = await userRepository.get(event.accessToken);

        dispatch(new UserRetrieved(user));

        return Promise.resolve(user);
    }
}
