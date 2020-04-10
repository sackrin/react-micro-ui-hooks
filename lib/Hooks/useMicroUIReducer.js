"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _getMicroUIWindowName = _interopRequireDefault(require("../Helpers/getMicroUIWindowName"));

var _getMicroUIWindowState = _interopRequireDefault(require("../Helpers/getMicroUIWindowState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMicroUIReducer(reducer, defaultState, path) {
  var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'MICROUI';

  var _useReducer = (0, _react.useReducer)(reducer, defaultState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var windowName = (0, _getMicroUIWindowName.default)('REDUCER', path, prefix);
  var windowStash = window[windowName] || (0, _getMicroUIWindowState.default)(state, windowName);
  windowStash.subscribe(function (action) {
    dispatch(action);
  });

  var _dispatch = (0, _react.useCallback)(function (action) {
    dispatch(action);
    windowStash.next(action);
  }, [windowStash, dispatch]);

  return [state, _dispatch];
}

var _default = useMicroUIReducer;
exports.default = _default;