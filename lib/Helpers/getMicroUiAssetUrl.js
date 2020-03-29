"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getMicroUiAssetUrl = function getMicroUiAssetUrl(name) {
  return window["__MicroUI".concat(name, "AssetURL__")];
};

var _default = getMicroUiAssetUrl;
exports.default = _default;