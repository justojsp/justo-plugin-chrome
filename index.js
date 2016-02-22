//imports
import {simple} from "justo";

//private
var open;

//api
module.exports = {
  get open() {
    if (!open) open = simple({ns: "org.justojs.plugin.chrome", name: "open"}, require("./lib/open").default);
    return open;
  }
};
