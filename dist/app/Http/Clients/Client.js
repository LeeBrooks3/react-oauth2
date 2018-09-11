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
var typescript_oauth2_1 = require("@leebrooks3/typescript-oauth2");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    /**
     * Configures the client from config.
     */
    function Client(config) {
        return _super.call(this, config.get('oauth2.clientId'), config.get('oauth2.clientSecret'), config.get('oauth2.serverUrl')) || this;
    }
    return Client;
}(typescript_oauth2_1.Client));
exports["default"] = Client;
//# sourceMappingURL=Client.js.map