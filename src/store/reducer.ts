import { Event, status } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
import UserAccessTokenCreated from '../app/Events/AccessToken/UserAccessTokenCreated';
import UserAccessTokenRestored from '../app/Events/AccessToken/UserAccessTokenRestored';
import UserRetrieved from '../app/Events/User/UserRetrieved';
import Logout from '../app/Jobs/Logout';

export interface StateInterface<U = ModelInterface> {
    token?: AccessToken;
    user?: U;
}

const initialState: StateInterface = {};

export default (state: StateInterface = initialState, action: Event): StateInterface => {
    if (action instanceof UserAccessTokenCreated || action instanceof UserAccessTokenRestored) {
        return {
            ...state,
            token: action.accessToken,
        };
    }

    if (action instanceof UserRetrieved) {
        return {
            ...state,
            user: action.user,
        };
    }

    if (action.type === Logout.name && action.status === status.PENDING) {
        return {
            ...state,
            user: null,
        };
    }

    return state;
};
