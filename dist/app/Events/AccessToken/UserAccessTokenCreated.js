"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GetUser_1 = require("../../Listeners/AccessToken/GetUser");
var StoreUserAccessToken_1 = require("../../Listeners/AccessToken/StoreUserAccessToken");
var AccessTokenEvent_1 = require("./AccessTokenEvent");
var UserAccessTokenCreated = /** @class */ (function (_super) {
    __extends(UserAccessTokenCreated, _super);
    function UserAccessTokenCreated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @inheritDoc */
    UserAccessTokenCreated.prototype.getListeners = function () {
        return [
            new StoreUserAccessToken_1["default"](),
            new GetUser_1["default"](),
        ];
    };
    return UserAccessTokenCreated;
}(AccessTokenEvent_1["default"]));
exports["default"] = UserAccessTokenCreated;
//# sourceMappingURL=UserAccessTokenCreated.js.map