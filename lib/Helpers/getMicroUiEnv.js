"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getMicroUiEnv = function getMicroUiEnv(name) {
  return window["__MicroUI".concat(name, "Environment__")] || {};
};

var _default = getMicroUiEnv;
exports.default = _default;