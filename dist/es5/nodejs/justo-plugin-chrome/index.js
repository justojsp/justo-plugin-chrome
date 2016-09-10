"use strict";
var _justo = require("justo");


var open;


module.exports = {
  get open() {
    if (!open) open = (0, _justo.simple)({ ns: "org.justojs.plugin.chrome", name: "open" }, require("./lib/open").default);
    return open;
  } };