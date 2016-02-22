//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;

//suite
suite("API", function() {
  test("#open", function() {
    const task = require("../../dist/es5/nodejs/justo-plugin-chrome").open;
    task.must.be.instanceOf(Function);
  });
})();
