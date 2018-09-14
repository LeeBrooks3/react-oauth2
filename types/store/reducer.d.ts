import { Event } from '@leebrooks3/react';
import { ModelInterface } from '@leebrooks3/typescript';
import { AccessToken } from '@leebrooks3/typescript-oauth2';
export interface StateInterface<U = ModelInterface> {
    token?: AccessToken;
    user?: U;
}
declare const _default: (state: StateInterface<ModelInterface>, action: Event) => StateInterface<ModelInterface>;
export default _default;
//# sourceMappingURL=reducer.d.ts.map