# justo-plugin-chrome

[![NPM version](http://img.shields.io/npm/v/justo-plugin-chrome.svg)](https://www.npmjs.org/package/justo-plugin-chrome)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-chrome.svg)](https://david-dm.org/justojsp/justo-plugin-chrome)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-chrome/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-chrome#info=devDependencies)

Plugin for *Google Chrome*.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-chrome
```

## open task

Open *Google Chrome*:

```
open(jsOpts, opts)
```

`opts` parameter:

- `path` (string). The directory where *Chrome*  is. Needed when it is not in the PATH.
- `src`  (string). The file to open.
- `newWindow` (boolean). Open in new window. Default: `false`.
- `incognito` (boolean). Open in new window in incognito mode. Default: `false`.

On *Linux*, the task uses `google-chrome` command. On *Windows*, `chrome.exe`.

Example:

```
const chrome = require("justo-plugin-chrome");

//open in new window
chrome.open("Open Chrome", {
  src: path.join(process.cwd(), "dist/app/index.html"),
  newWindow: true
});

//open in new window in incognito mode
chrome.open("Open Chrome", {
  path: "C:\\Program Files (x86)\\Google\\Chrome\\Application",
  src: path.join(process.cwd(), "dist/app/index.html"),
  incognito: true
});
```
