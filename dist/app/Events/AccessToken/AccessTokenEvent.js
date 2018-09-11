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
var react_1 = require("@leebrooks3/react");
var AccessTokenEvent = /** @class */ (function (_super) {
    __extends(AccessTokenEvent, _super);
    /**
     * Sets the access token.
     */
    function AccessTokenEvent(accessToken) {
        var _this = _super.call(this) || this;
        _this.accessToken = accessToken;
        return _this;
    }
    return AccessTokenEvent;
}(react_1.Event));
exports["default"] = AccessTokenEvent;
//# sourceMappingURL=AccessTokenEvent.js.map