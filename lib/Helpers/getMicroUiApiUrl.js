"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getMicroUiApiUrl = function getMicroUiApiUrl(name) {
  return window["__MicroUI".concat(name, "URL__")];
};

var _default = getMicroUiApiUrl;
exports.default = _default;