Tasks for *Google Chrome*.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-chrome
```

## open task

Open *Google Chrome*:

```
open(opts, config)
```

The `config` options:

- `path` (string). The directory where *Chrome*  is.
- `src`  (string). The file to open.
- `newWindow` (boolean). Open in new window. Default: `false`.
- `incognito` (boolean). Open in new window in incognito mode. Default: `false`.

Example:

```
const chrome = require("justo-plugin-chrome");

//open in new window
chrome.open("Open Chrome", {
  path: "C:\\Program Files (x86)\\Google\\Chrome\\Application",
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
