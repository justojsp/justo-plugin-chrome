//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-chrome/lib/open").default;

//suite
suite("#open()", function() {
  const DATA = "test/unit/data";

  test("open(config)", function() {
    op([{
      src: path.join(process.cwd(), DATA, "file.html")
    }]).must.be.eq(0);
  });

  test("open(config) - with newWindow:true", function() {
    op([{
      src: path.join(process.cwd(), DATA, "file.html"),
      newWindow: true
    }]).must.be.eq(0);
  });

  test("open(config) - with incognito:true", function() {
    op([{
      src: path.join(process.cwd(), DATA, "file.html"),
      incognito: true
    }]).must.be.eq(0);
  });
})();
