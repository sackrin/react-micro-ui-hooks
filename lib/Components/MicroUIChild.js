"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MicroUIChild = void 0;

var _react = _interopRequireDefault(require("react"));

var _getMicroUIChild = _interopRequireDefault(require("./getMicroUIChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MicroUIChild = function MicroUIChild(props) {
  return (0, _getMicroUIChild.default)(props);
};

exports.MicroUIChild = MicroUIChild;
var _default = MicroUIChild;
exports.default = _default;