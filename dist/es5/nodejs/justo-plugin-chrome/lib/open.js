"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 







op;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _path = require("path");var _path2 = _interopRequireDefault(_path);var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var cmd, args = [];


  if (params.length >= 1) params = Object.assign({}, params[0]);


  if (/^win/.test(_os2.default.platform())) cmd = "chrome.exe";else 
  cmd = "chrome";

  if (params.path) cmd = _path2.default.join(params.path, cmd);
  if (params.newWindow) args.push("--new-window");
  if (params.incognito) args.push("--incognito");
  if (params.src) args.push(params.src);


  return _child_process2.default.spawnSync(cmd, args).status;}