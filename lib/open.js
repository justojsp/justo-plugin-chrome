//imports
import os from "os";
import path from "path";
import child_process from "child_process";

/**
 * Task operation.
 */
export default function op(params) {
  var cmd, args = [];

  //(1) arguments
  if (params.length >= 1) params = Object.assign({}, params[0]);

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "chrome.exe";
  else cmd = "chrome";

  if (params.path) cmd = path.join(params.path, cmd);
  if (params.newWindow) args.push("--new-window");
  if (params.incognito) args.push("--incognito");
  if (params.src) args.push(params.src);

  //(3) open
  return child_process.spawnSync(cmd, args).status;
}
