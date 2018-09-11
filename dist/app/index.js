"use strict";
exports.__esModule = true;
var typescript_oauth2_1 = require("@leebrooks3/typescript-oauth2");
var Client_1 = require("./Http/Clients/Client");
exports["default"] = {
    accessTokenRepository: function (container) {
        var config = container.make('config');
        return new typescript_oauth2_1.AccessTokenRepository(container.make('oauth2.client'), config.get('oauth2.tokenEndpoint'));
    },
    client: function (container) {
        return new Client_1["default"](container.make('config'));
    }
};
//# sourceMappingURL=index.js.map