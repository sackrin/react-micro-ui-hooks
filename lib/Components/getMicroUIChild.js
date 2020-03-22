"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMicroUIChild = void 0;

var getMicroUIChild = function getMicroUIChild(props) {
  // Deconstruct the micro UI component values
  var _props$microUi = props.microUi,
      library = _props$microUi.library,
      name = _props$microUi.name; // If the library exists then return the built child

  return window[library] && window[library].Child ? window[library].Child(name, props) : undefined;
};

exports.getMicroUIChild = getMicroUIChild;
var _default = getMicroUIChild;
exports.default = _default;