"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getMicroUIWindowName = function getMicroUIWindowName(type, path, prefix) {
  return "__".concat(prefix, "_").concat(path, "_").concat(type, "__");
};

var _default = getMicroUIWindowName;
exports.default = _default;