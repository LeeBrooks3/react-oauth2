"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var react_1 = require("@leebrooks3/react");
var UserAccessTokenCreated_1 = require("../app/Events/AccessToken/UserAccessTokenCreated");
var UserAccessTokenRestored_1 = require("../app/Events/AccessToken/UserAccessTokenRestored");
var UserRetrieved_1 = require("../app/Events/User/UserRetrieved");
var Logout_1 = require("../app/Jobs/Logout");
var initialState = {};
exports["default"] = (function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action instanceof UserAccessTokenCreated_1["default"] || action instanceof UserAccessTokenRestored_1["default"]) {
        return __assign({}, state, { token: action.accessToken });
    }
    if (action instanceof UserRetrieved_1["default"]) {
        return __assign({}, state, { user: action.user });
    }
    if (action.type === Logout_1["default"].name && action.status === react_1.status.PENDING) {
        return __assign({}, state, { user: null });
    }
    return state;
});
//# sourceMappingURL=reducer.js.map