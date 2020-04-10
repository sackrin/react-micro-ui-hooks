"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var getMicroUIWindowState = function getMicroUIWindowState(defaultState, windowName) {
  window[windowName] = new _rxjs.Subject();
  window[windowName].next(defaultState);
  return window[windowName];
};

var _default = getMicroUIWindowState;
exports.default = _default;