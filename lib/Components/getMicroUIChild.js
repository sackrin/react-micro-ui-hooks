"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMicroUIChild = void 0;

var _Helpers = require("../Helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getMicroUIChild = function getMicroUIChild(props) {
  // Deconstruct the micro UI component values
  var _props$microUi = props.microUi,
      library = _props$microUi.library,
      name = _props$microUi.name; // Retrieve the current env setting for this micro UI

  var env = (0, _Helpers.getMicroUiEnv)(library); // If the library exists then return the built child

  return window[library] && window[library].Child ? window[library].Child(name, _objectSpread({}, props, {
    env: env
  })) : undefined;
};

exports.getMicroUIChild = getMicroUIChild;
var _default = getMicroUIChild;
exports.default = _default;