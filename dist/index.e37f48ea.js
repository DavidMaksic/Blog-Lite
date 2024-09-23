// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _darkModeViewJs = require("./views/darkModeView.js");
var _darkModeViewJsDefault = parcelHelpers.interopDefault(_darkModeViewJs);
var _publishViewJs = require("./views/publishView.js");
var _publishViewJsDefault = parcelHelpers.interopDefault(_publishViewJs);
var _deleteViewJs = require("./views/deleteView.js");
var _deleteViewJsDefault = parcelHelpers.interopDefault(_deleteViewJs);
var _articleViewJs = require("./views/articleView.js");
var _articleViewJsDefault = parcelHelpers.interopDefault(_articleViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _editViewJs = require("./views/editView.js");
var _editViewJsDefault = parcelHelpers.interopDefault(_editViewJs);
var _sortViewJs = require("./views/sortView.js");
var _sortViewJsDefault = parcelHelpers.interopDefault(_sortViewJs);
// -- Article logic
const controlArticles = function() {
    (0, _articleViewJsDefault.default).upload(_modelJs.state.articles, controlAddArticle, controlArticleHandler);
    (0, _articleViewJsDefault.default).returnToPreviews(_modelJs.state.articles, controlArticleHandler);
    (0, _articleViewJsDefault.default).observer();
};
const controlArticleHandler = function(articleData, articleH2) {
    _modelJs.updateArticle(articleData, articleH2);
};
const controlAddArticle = function() {
    _modelJs.addArticle((0, _articleViewJsDefault.default).article, (0, _articleViewJsDefault.default).preview);
};
const controlDeleteArticle = function() {
    _modelJs.deleteArticle((0, _deleteViewJsDefault.default).articleH2text);
};
const renderArticlesOnLoad = function() {
    // - Render article previews
    _modelJs.state.previews?.map((item)=>(0, _articleViewJsDefault.default).renderPreview(item));
    // - Render articles
    _modelJs.state.articles?.map((item)=>(0, _articleViewJsDefault.default).renderArticle(item));
    (0, _articleViewJsDefault.default).hideArticlesOnLoad(_modelJs.state.articles);
};
// -- Bookmark logic
const controlBookmarks = function() {
    (0, _bookmarkViewJsDefault.default).createBookmark(controlAddBookmark, controlRemoveBookmark);
    (0, _bookmarkViewJsDefault.default).toggleDropdown(_modelJs.state.bookmarks);
};
const controlAddBookmark = function() {
    _modelJs.addBookmark((0, _bookmarkViewJsDefault.default).articleH2);
    (0, _bookmarkViewJsDefault.default).renderBookmarks(_modelJs.state.bookmarks);
};
const controlRemoveBookmark = function() {
    _modelJs.removeBookmark((0, _bookmarkViewJsDefault.default).articleH2);
};
const controlRemoveBookmarkOnDelete = function() {
    _modelJs.removeBookmarkOnDelete((0, _deleteViewJsDefault.default).articleH2text);
};
const renderBookmarksOnLoad = function() {
    (0, _bookmarkViewJsDefault.default).renderBookmarks(_modelJs.state.bookmarks);
    (0, _bookmarkViewJsDefault.default).persistBookmarkIcon(_modelJs.state.articles);
};
// -- Edit logic
const controlEdit = function() {
    (0, _editViewJsDefault.default).showEditModal(controlEditHandler, _modelJs.state.articles);
};
const controlEditHandler = function() {
    _modelJs.updateArticle((0, _editViewJsDefault.default).data, (0, _editViewJsDefault.default).articleH2);
};
// -- Sorting logic
const controlSort = function() {
    (0, _sortViewJsDefault.default).sortByTag(_modelJs.state.previews, controlSortHandler);
};
const controlSortHandler = function() {
    _modelJs.persistSorting((0, _sortViewJsDefault.default).selectedTag);
};
// -- Dark mode logic
const controlDarkMode = function() {
    (0, _darkModeViewJsDefault.default).loadTheme();
    (0, _darkModeViewJsDefault.default).toggleTheme();
};
// -- Publish modal logic
const controlPublish = function() {
    (0, _publishViewJsDefault.default).showPublishModal();
    (0, _publishViewJsDefault.default).exitPublishModal();
};
// -- Delete data from state
const controlDelete = function() {
    (0, _deleteViewJsDefault.default).deleteArticleMarkup(_modelJs.state.previews, controlDeleteArticle, controlRemoveBookmarkOnDelete);
    (0, _deleteViewJsDefault.default).deleteMessageOnLoad(_modelJs.state.articles);
};
const init = function() {
    renderArticlesOnLoad();
    renderBookmarksOnLoad();
    controlArticles();
    controlBookmarks();
    controlEdit();
    controlSort();
    controlPublish();
    controlDelete();
    controlDarkMode();
};
init();

},{"./model.js":"Y4A21","./views/darkModeView.js":"fven8","./views/publishView.js":"ly8K5","./views/deleteView.js":"4BAsC","./views/articleView.js":"5jNgA","./views/bookmarkView.js":"7YaI3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/editView.js":"gzFfI","./views/sortView.js":"hucv9"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "addArticle", ()=>addArticle);
parcelHelpers.export(exports, "deleteArticle", ()=>deleteArticle);
parcelHelpers.export(exports, "updateArticle", ()=>updateArticle);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "removeBookmark", ()=>removeBookmark);
parcelHelpers.export(exports, "removeBookmarkOnDelete", ()=>removeBookmarkOnDelete);
parcelHelpers.export(exports, "persistSorting", ()=>persistSorting);
const state = {
    articles: [],
    bookmarks: [],
    previews: []
};
const addArticle = function(article, preview) {
    state.articles?.push(article);
    state.previews?.push(preview);
    persistArticle(article, article?.id);
    persistPreview(preview, preview?.id);
};
const deleteArticle = function(articleH2text) {
    const [theArticle] = state.articles.filter((item)=>item.title === articleH2text);
    const [thePreview] = state.previews.filter((item)=>item.title === articleH2text);
    removeArticleFromStorage(theArticle.id);
    removePreviewFromStorage(thePreview.id);
    const articleIndex = state.articles.indexOf(theArticle);
    const previewIndex = state.previews.indexOf(thePreview);
    state.articles.splice(articleIndex, 1);
    state.previews.splice(previewIndex, 1);
};
const updateArticle = function(data, articleH2) {
    // - Fetch current article, bookmark and preview
    const [theArticle] = state.articles.filter((item)=>item.title === articleH2);
    const [theBookmark] = state.bookmarks?.filter((item)=>item.title === articleH2);
    const [thePreview] = state.previews?.filter((item)=>item.title === articleH2);
    // - Update article in state
    const articleIndex = state.articles.indexOf(theArticle);
    state.articles[articleIndex].title = data.title;
    state.articles[articleIndex].description = data.description;
    state.articles[articleIndex].imageURL = data.imageURL;
    state.articles[articleIndex].content = data.content;
    state.articles[articleIndex].tag = data.tag;
    state.articles[articleIndex].opened = data.opened;
    // - Update article in storage
    const currentArticle = state.articles[articleIndex];
    persistArticle(currentArticle, currentArticle.id);
    // - Update preview in state
    if (thePreview) {
        const previewIndex = state.previews.indexOf(thePreview);
        state.previews[previewIndex].title = data.title;
        state.previews[previewIndex].description = data.description;
        state.previews[previewIndex].imageURL = data.imageURL;
        state.previews[previewIndex].tag = data.tag;
        persistPreview(state.previews[previewIndex], state.previews[previewIndex].id);
    }
    // - Update bookmark in state
    if (theBookmark) {
        const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
        state.bookmarks[bookmarkIndex].title = data.title;
        state.bookmarks[bookmarkIndex].description = data.description;
        state.bookmarks[bookmarkIndex].imageURL = data.imageURL;
        state.bookmarks[bookmarkIndex].content = data.content;
        persistBookmark(state.bookmarks[bookmarkIndex], state.bookmarks[bookmarkIndex].bookmarkID);
    }
};
const persistArticle = function(article, id) {
    localStorage.setItem("article-" + id, JSON.stringify(article));
};
const persistPreview = function(preview, id) {
    localStorage.setItem("preview-" + id, JSON.stringify(preview));
};
const removeArticleFromStorage = function(id) {
    localStorage.removeItem("article-" + id);
};
const removePreviewFromStorage = function(id) {
    localStorage.removeItem("preview-" + id);
};
const addBookmark = function(h2content) {
    // - Mark current article as bookmarked
    const [theArticle] = state.articles.filter((item)=>item.title === h2content);
    const articleIndex = state.articles.indexOf(theArticle);
    const currentArticle = state.articles[articleIndex];
    currentArticle.isBookmarked = true;
    // - Update new property in storage
    const currentArticleID = currentArticle.id.toString();
    persistArticle(currentArticle, currentArticleID);
    // - Create current bookmark object
    const bookmark = {
        title: theArticle.title,
        description: theArticle.description,
        imageURL: theArticle.imageURL,
        rendered: false,
        bookmarkID: theArticle.id
    };
    state.bookmarks.push(bookmark);
    persistBookmark(bookmark, bookmark?.bookmarkID);
};
const removeBookmark = function(articleH2) {
    const [theBookmark] = state.bookmarks.filter((item)=>item.title === articleH2);
    removeBookmarkFromStorage(theBookmark.bookmarkID);
    const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
    state.bookmarks.splice(bookmarkIndex, 1);
    // - Mark current article as not bookmarked
    const [theArticle] = state.articles.filter((item)=>item.title === articleH2);
    const articleIndex = state.articles.indexOf(theArticle);
    const currentArticle = state.articles[articleIndex];
    currentArticle.isBookmarked = false;
    // - Update isBookmarked property in storage
    const currentArticleID = currentArticle.id.toString();
    persistArticle(currentArticle, currentArticleID);
};
const removeBookmarkOnDelete = function(articleh2) {
    // - Remove bookmark
    if (state.bookmarks.length > 0) {
        const [theBookmark] = state.bookmarks.filter((item)=>item.title === articleh2);
        removeBookmarkFromStorage(theBookmark.bookmarkID);
        const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
        state.bookmarks.splice(bookmarkIndex, 1);
    }
};
const persistBookmark = function(bookmark, bookmarkID) {
    localStorage.setItem("bookmark-" + bookmarkID, JSON.stringify(bookmark));
};
const removeBookmarkFromStorage = function(bookmarkID) {
    localStorage.removeItem("bookmark-" + bookmarkID);
};
const persistSorting = function(tag) {
    localStorage.setItem("currentTag", tag);
};
// -- Storage logic
const allStorage = function() {
    let archive = [], keys = Object.keys(localStorage), i = 0, key;
    for(; key = keys[i]; i++)archive.push(key + "=" + localStorage.getItem(key));
    return archive;
};
const init = function() {
    const allItems = allStorage();
    // Exclude all except article IDs
    const storageArticles = allItems.filter((item)=>!item.includes("selectedTheme=light"));
    const storageArticles2 = storageArticles.filter((item)=>!item.includes("selectedTheme=dark"));
    const storageArticles3 = storageArticles2.filter((item)=>!item.includes("bookmark-"));
    const storageArticles4 = storageArticles3.filter((item)=>!item.includes("currentTag"));
    const storageArticles5 = storageArticles4.filter((item)=>!item.includes("preview-"));
    const articleIDs = storageArticles5?.map((item)=>item.slice(0, 18));
    articleIDs?.forEach((item)=>state.articles.push(JSON.parse(localStorage.getItem(item))));
    // Exclude all except bookmark IDs
    const storageBookmarks = allItems.filter((item)=>!item.includes("selectedTheme=light"));
    const storageBookmarks2 = storageBookmarks.filter((item)=>!item.includes("selectedTheme=dark"));
    const storageBookmarks3 = storageBookmarks2.filter((item)=>!item.includes("article-"));
    const storageBookmarks4 = storageBookmarks3.filter((item)=>!item.includes("currentTag"));
    const storageBookmarks5 = storageBookmarks4.filter((item)=>!item.includes("preview-"));
    const bookmarkIDs = storageBookmarks5?.map((item)=>item.slice(0, 19));
    bookmarkIDs?.forEach((item)=>state.bookmarks.push(JSON.parse(localStorage.getItem(item))));
    // Exclude all except article previews
    const articlePreviews1 = allItems.filter((item)=>!item.includes("selectedTheme=light"));
    const articlePreviews2 = articlePreviews1.filter((item)=>!item.includes("selectedTheme=dark"));
    const articlePreviews3 = articlePreviews2.filter((item)=>!item.includes("bookmark-"));
    const articlePreviews4 = articlePreviews3.filter((item)=>!item.includes("currentTag"));
    const articlePreviews5 = articlePreviews4.filter((item)=>!item.includes("article-"));
    const articlePreviews = articlePreviews5?.map((item)=>item.slice(0, 18));
    articlePreviews?.forEach((item)=>state.previews.push(JSON.parse(localStorage.getItem(item))));
};
init(); // localStorage.clear();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fven8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class darkModeView {
    #root = document.querySelector(":root");
    #darkBtn = document.getElementById("dark-mode");
    #dot = document.getElementById("dot");
    #sun = document.querySelector(".sun");
    #moon = document.querySelector(".moon");
    loadTheme() {
        document.addEventListener("DOMContentLoaded", ()=>{
            const theme = localStorage.getItem("selectedTheme");
            // - When loading document select theme from localStorage
            theme === "dark" ? this.#loadDarkTheme() : this.#loadLightTheme();
        });
    }
    #loadDarkTheme() {
        this.#root.classList.add("dark");
        this.#dot.classList.toggle("translate-x-6");
        this.#sun.classList.add("sm:hide");
        this.#sun.classList.remove("sm:active");
        this.#moon.classList.add("sm:active");
        this.#moon.classList.remove("sm:hide");
    }
    #loadLightTheme() {
        this.#root.classList.remove("dark");
        this.#sun.classList.add("sm:active");
        this.#sun.classList.remove("sm:hide");
        this.#moon.classList.add("sm:hide");
        this.#moon.classList.remove("sm:active");
    }
    toggleTheme() {
        this.#darkBtn.addEventListener("click", ()=>{
            this.#root.classList.toggle("dark");
            this.#dot.classList.toggle("translate-x-6");
            // - If user changes theme, save it to localStorage
            this.#root.classList.contains("dark") ? localStorage.setItem("selectedTheme", "dark") : localStorage.setItem("selectedTheme", "light");
            // - Enable changing of icons on phones
            const property = window.getComputedStyle(this.#darkBtn).getPropertyValue("gap");
            if (property === "12.16px") {
                if (this.#root.classList.contains("dark")) {
                    this.#sun.classList.add("sm:hide");
                    this.#sun.classList.remove("sm:active");
                    this.#moon.classList.add("sm:active");
                    this.#moon.classList.remove("sm:hide");
                } else {
                    this.#sun.classList.add("sm:active");
                    this.#sun.classList.remove("sm:hide");
                    this.#moon.classList.add("sm:hide");
                    this.#moon.classList.remove("sm:active");
                }
            }
        });
    }
}
exports.default = new darkModeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ly8K5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PublishView extends (0, _viewJsDefault.default) {
    #addPostBtn = document.getElementById("add-btn");
    #exitModalBtn = document.getElementById("exit-modal-btn");
    showPublishModal() {
        this.#addPostBtn?.addEventListener("click", this.togglePublishModal.bind(this));
        const infoIcon = document.querySelector(".info-icon");
        infoIcon.addEventListener("mouseover", function() {
            const mdInfo = document.querySelector(".md-info");
            mdInfo.classList.remove("hide");
            mdInfo.classList.add("active");
        });
        infoIcon.addEventListener("mouseout", function() {
            const mdInfo = document.querySelector(".md-info");
            mdInfo.classList.add("hide");
            mdInfo.classList.remove("active");
        });
    }
    exitPublishModal() {
        const thisObject = this;
        // - When ESC is pressed
        window.onkeydown = (e)=>{
            if (e.key === "Escape" && this.publishModal.classList.contains("active")) this.togglePublishModal();
        };
        // - By clicking outside
        this.publishModal?.addEventListener("click", this.togglePublishModal.bind(this));
        this.form?.addEventListener("click", (e)=>e.stopPropagation());
        this.#exitModalBtn?.addEventListener("click", function() {
            thisObject.togglePublishModal();
        });
    }
}
exports.default = new PublishView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    publishModal = document.getElementById("modal");
    #message = document.getElementById("message");
    form = document.getElementById("modal-content");
    clearMessage() {
        this.#message?.classList.add("hidden");
        setTimeout(()=>{
            this.#message?.classList.add("hide");
            this.#message?.classList.remove("active");
        }, 1);
    }
    addMessage() {
        this.#message?.classList.remove("hidden");
        setTimeout(()=>{
            this.#message?.classList.remove("hide");
            this.#message?.classList.add("active");
        }, 1);
    }
    togglePublishModal() {
        this.publishModal.classList.toggle("active");
    }
    styleText(data) {
        const articleNodeList = document.querySelectorAll(".article-element");
        const allArticles = Array.from(articleNodeList);
        // - Fetch current article
        const [theArticle] = allArticles.filter((item)=>item.querySelector(".article-h2").textContent.trim() === data.title);
        const paragraph = theArticle.querySelector(".article-p");
        const articleText = data.content;
        const firstLetter = articleText.slice(0, 1);
        const allOtherLetters = articleText.substring(1);
        // - Implement markdown functionality
        const md = markdownit();
        const allOtherLettersMD = md.render(allOtherLetters);
        // - Style first letter and the rest of the text
        paragraph.innerHTML = `<span class="text-[11rem] pr-5 text-[#768293] dark:text-slate-400 leading-[0.7] mt-4 float-left font-medium sm:text-[5.5rem] sm:leading-[0.63] sm:pr-3" style="font-family: 'Bodoni Moda', 'Viaoda Libre', serif">${firstLetter}</span><span class="paragraph-span prose prose-headings:text-left prose-headings:font-normal prose-h1:font-normal prose-headings:mt-12 prose-h1:pt-6 sm:prose-h1:mt-4 prose-h1:mb-4 prose-headings:mb-5 prose-h1:text-[#9895b7] prose-headings:text-[#a9a5cb] dark:prose-headings:text-[#c3c0db] sm:prose-h3:leading-[2.2rem] text-2xl leading-[1.9rem] text-justify sm:leading-[1.65rem] text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700 m-0 prose-strong:text-slate-600 dark:prose-strong:text-white prose-strong:font-black prose-a:text-[#a9a5cb] dark:prose-a:text-[#b4bfcd] prose-a:underline-offset-4 prose-hr:border-slate-300 dark:prose-hr:border-slate-400 sm:dark:prose-hr:border-[#8593a6] prose-blockquote:text-slate-500 dark:prose-blockquote:text-[#d0d9e4] prose-blockquote:border-s-slate-300 dark:prose-blockquote:border-s-[#8593a6] sm:dark:prose-blockquote:border-s-slate-500 prose-blockquote:border-s-2 prose-li:marker:text-slate-400 dark:prose-li:marker:text-[#a9b5c6] prose-li:text-start prose-blockquote:text-start prose-code:text-slate-500 dark:prose-code:text-slate-300 prose-pre:bg-slate-200 dark:prose-pre:bg-slate-700 prose-tr:border-b-slate-200 sm:dark:prose-tr:border-b-slate-500 dark:prose-tr:border-b-slate-400">${allOtherLettersMD}</span>`;
        // - To open links in another tab
        const allEls = document.querySelector(".paragraph-span");
        const anchors = Array.from(allEls.getElementsByTagName("a"));
        anchors.forEach((item)=>item.setAttribute("target", "_blank"));
        // - Style trash can for mobile
        const trash = theArticle.querySelector(".delete-btn-container").children[0];
        trash.classList.add("sm:h-8");
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BAsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class DeleteView extends (0, _viewJsDefault.default) {
    #dropdownParent = document.querySelector(".bookmark-parent");
    dropdownBtn = document.querySelector(".dropdown-btn");
    #header = document.querySelector(".header");
    articleH2text;
    articles;
    deleteMessageOnLoad(articleObjects) {
        if (articleObjects.length > 0) this.clearMessage();
        this.articles = articleObjects;
    }
    deleteArticleMarkup(previews, handleArticle, handleBookmark) {
        window.addEventListener("click", (e)=>{
            if (e.target.closest("#delete-btn")) {
                this.#renderWarningMessage();
                // - Show and animate warning message
                const warningMessage = document.querySelector(".warning-message");
                warningMessage.classList.add("active");
                setTimeout(()=>{
                    warningMessage.classList.remove("hide");
                }, 1);
                // - Delete current article
                const deleteBtn = e.target.closest("#delete-btn");
                const article = deleteBtn.closest(".article-element");
                this.#deleteArticle(deleteBtn, article, previews, handleArticle, handleBookmark);
            }
            // - When ESC is pressed, exit message
            window.onkeydown = (e)=>{
                const warningMessage = document.querySelector(".warning-message");
                if (e.key === "Escape" && warningMessage) {
                    warningMessage.classList.add("hide");
                    setTimeout(()=>{
                        warningMessage.remove();
                    }, 400);
                }
            };
            // - Exit message by clicking outside
            const warningMessage = document.querySelector(".warning-message");
            warningMessage?.addEventListener("click", function() {
                warningMessage.classList.add("hide");
                setTimeout(()=>{
                    warningMessage.remove();
                }, 400);
            });
            const warningDiv = document.querySelector(".warning-div");
            warningDiv?.addEventListener("click", function(e) {
                e.stopPropagation();
            });
        });
    }
    #deleteArticle(deleteBtn, article, previews, handleArticle, handleBookmark) {
        const deleteBtnWarning = document.querySelector(".delete-warning");
        const closeButton = document.querySelector(".close-warning");
        const thisObject = this;
        // - If close option is clicked
        closeButton.addEventListener("click", function() {
            const warningMessage = closeButton.closest(".warning-message");
            warningMessage.classList.add("hide");
            setTimeout(()=>{
                warningMessage.remove();
            }, 400);
        });
        // - If delete option is clicked
        deleteBtnWarning.addEventListener("click", function() {
            thisObject.articleH2text = article.querySelector(".article-h2").innerText;
            const h2 = article.querySelector(".article-h2");
            const h3 = article.querySelector(".article-h3");
            const p = article.querySelector(".article-p");
            const span = article.querySelector(".delete-span");
            article.querySelector(".options-span").classList.add("hidden");
            // - Remove article markup
            article.classList.add("hide");
            article.classList.remove("active");
            article.classList.remove("relative");
            article.classList.add("block");
            // - Hide elements on delete
            article.querySelector(".article-img").classList.add("opacity-0");
            article.querySelector(".edit-btn").classList.add("hidden");
            article.querySelector(".options-span").classList.add("opacity-0");
            article.querySelector(".tag-element").classList.add("hidden");
            const bookmark = article.querySelector(".bookmarks");
            const bookmarkChecked = bookmark.querySelector(".bookmark-full");
            bookmark.classList.add("opacity-0");
            const allElements = [];
            allElements.push(h2, h3, p, span, deleteBtn);
            allElements.map((el)=>el.textContent = "");
            // - For other devices
            article.classList.add("max-h-0");
            if (article.classList.contains("py-10")) article.classList.remove("py-10");
            if (article.classList.contains("pb-12")) article.classList.remove("pb-12");
            // - For phones and tablets
            if (article.classList.contains("sm:py-8")) article.classList.remove("sm:py-8");
            if (article.classList.contains("sm:pb-6")) article.classList.remove("sm:pb-6");
            if (article.classList.contains("sm:mb-14")) article.classList.remove("sm:mb-14");
            setTimeout(()=>{
                article.remove();
            }, 400);
            // - Remove article and preview from state and storage
            handleArticle();
            // - Show all articles previews
            const allArticleNodes = document.querySelectorAll(".article-preview");
            const allArticles = Array.from(allArticleNodes);
            allArticles.forEach((item)=>{
                item.classList.remove("hidden");
                setTimeout(()=>{
                    item.classList.remove("hide");
                    item.classList.add("active");
                    item.classList.add("relative");
                    item.classList.remove("block");
                }, 1);
            });
            const allPreviewNodes = document.querySelectorAll(".article-preview");
            const allPreviews = Array.from(allPreviewNodes);
            // - Remove current preview
            const [currentPreview] = allPreviews.filter((item)=>item.querySelector(".preview-h2").textContent === thisObject.articleH2text);
            currentPreview.remove();
            document.getElementById("add-btn").classList.remove("hide");
            document.getElementById("add-btn").classList.remove("absolute");
            document.querySelector(".sorting").classList.remove("hidden");
            document.querySelector(".home").classList.remove("hidden");
            document.querySelector(".return").classList.add("hidden");
            document.querySelector(".footer-div").classList.remove("hidden");
            document.querySelector(".footer-div").classList.add("mt-80");
            // - Adapt dropdown btn icon
            const iconThin = thisObject.dropdownBtn.querySelector(".bookmark-outline");
            const iconFull = thisObject.dropdownBtn.querySelector(".bookmark-filled");
            const allBookmarkFullNodes = document.querySelectorAll(".bookmark-full");
            const allBookmarkFullBtnsArray = Array.from(allBookmarkFullNodes);
            bookmarkChecked.classList.add("hidden");
            const check = allBookmarkFullBtnsArray.every((item)=>item.classList.contains("hidden"));
            if (check) {
                iconFull.classList.add("hide");
                iconFull.classList.remove("active");
                iconThin.classList.remove("hide");
                iconThin.classList.add("active");
            }
            if (previews.length === 0) thisObject.addMessage();
            // - If current article is bookmarked, delete the bookmark too
            if (bookmarkChecked.classList.contains("hidden")) {
                // - Get bookmark data
                const allBookmarks = [
                    ...document.querySelectorAll(".dropdown-item")
                ];
                const bookmarkHeaders = allBookmarks.map((item)=>item?.querySelector(".bookmark-h2").textContent.trim());
                const [filteredString] = bookmarkHeaders.filter((bookmarkH2)=>bookmarkH2 === thisObject.articleH2text);
                const [theItem] = allBookmarks.filter((item)=>item?.querySelector(".bookmark-h2").textContent.trim() === filteredString);
                // - Remove bookmark from state and storage
                handleBookmark();
                // - Remove bookmark markup
                theItem?.remove();
                // - Delete currently clicked item's markup from this array
                const [theBookmarkMarkup] = allBookmarks.filter((bookmark)=>bookmark.querySelector(".bookmark-h2").textContent.trim() === thisObject.articleH2text);
                const theBookmarkMarkupIndex = allBookmarks.indexOf(theBookmarkMarkup);
                allBookmarks.splice(theBookmarkMarkupIndex, 1);
                // - Delete clicked bookmark from bookmarkHeaders array
                const [theBookmark] = bookmarkHeaders.filter((bookmark)=>bookmark === thisObject.articleH2text);
                const theBookmarkIndex = bookmarkHeaders.indexOf(theBookmark);
                bookmarkHeaders.splice(theBookmarkIndex, 1);
                const bookmarkMsg = document.querySelector(".bookmark-message");
                bookmarkMsg?.remove();
                if (allBookmarks.length === 0) thisObject.renderBookmarkMessage();
            }
            const warningMessage = deleteBtnWarning.closest(".warning-message");
            warningMessage.classList.add("hide");
            setTimeout(()=>{
                warningMessage.remove();
            }, 400);
        });
    }
    #renderWarningMessage() {
        this.#header.insertAdjacentHTML("afterend", this.#generateWarningMSG());
    }
    #generateWarningMSG() {
        return `
         <div class="warning-message h-full w-full fixed z-20 backdrop-blur-xl transition-all duration-300 hide">
            <div class="warning-div fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-70%] flex flex-col gap-8 border-2 border-slate-300 dark:border-transparent bg-white dark:bg-slate-800 py-14 pb-9 px-12 w-2/6 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:shadow-none sm:py-10 sm:pb-8 sm:px-8 sm:text-3xl sm:w-11/12">
               <span class="text-4xl text-slate-600 dark:text-[#a9b5c6] text-center">Are you sure you want to delete this article?</span>
               <div
                  class="h-[1px] bg-gradient-to-r from-white via-violet to-white dark:from-slate-800 dark:via-violet dark:to-slate-800">
               </div>
               <div class="self-center flex gap-10 sm:gap-8 items-center">
                  <a href="#" class="delete-warning transition text-4xl text-red2 hover:text-redhover dark:text-redhover dark:hover:text-red text-center">Yes</a>
                  <span class="text-3xl text-slate-400 hover:text-[#a9b5c6] dark:text-slate-500 dark:hover:text-slate-300 text-center">/</span>
                  <button class="close-warning transition text-4xl text-slate-500 hover:text-[#a9b5c6] dark:text-[#a9b5c6] dark:hover:text-slate-300 text-center">No</button>
               </div>
            </div>
         </div>
      `;
    }
    renderBookmarkMessage() {
        this.#dropdownParent?.insertAdjacentHTML("afterend", this.#generateBookmarkMessage());
    }
    #generateBookmarkMessage() {
        return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:mt-40 md:shadow-none sm:py-6 sm:px-12 sm:text-3xl sm:w-11/12">You haven't saved any articles yet!</span>
      `;
    }
}
exports.default = new DeleteView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jNgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class ArticleView extends (0, _viewJsDefault.default) {
    #btnParentEl = document.getElementById("btn-parent");
    article;
    preview = {};
    hideArticlesOnLoad(articleObjects) {
        const allArticlesList = document.querySelectorAll(".article-element");
        const allArticles = Array.from(allArticlesList);
        // - If article was opened and page was reloaded
        const [openedArticle] = articleObjects.filter((item)=>item.opened === true);
        const allOtherArticleObjects = articleObjects.filter((item)=>item.opened === false);
        if (openedArticle) {
            const [theArticle] = allArticles.filter((item)=>item.querySelector(".article-h2").textContent.trim() === openedArticle?.title);
            const articleH2 = theArticle.querySelector(".article-h2").textContent.trim();
            // - Show opened article
            theArticle.classList.remove("hidden");
            theArticle.classList.remove("hide");
            theArticle.classList.add("active");
            theArticle.classList.add("relative");
            theArticle.classList.remove("block");
            // - If other articles exist, hide them
            if (allOtherArticleObjects.length > 0) {
                const filteredArticles = allArticles.filter((item)=>item.querySelector(".article-h2").textContent.trim() !== articleH2);
                filteredArticles.forEach((item)=>{
                    item.classList.add("hidden");
                    item.classList.add("hide");
                    item.classList.remove("active");
                    item.classList.remove("relative");
                    item.classList.add("block");
                });
            }
            // - Hide all previews
            setTimeout(()=>{
                const allPreviewsList = document.querySelectorAll(".article-preview");
                const allPreviews = Array.from(allPreviewsList);
                allPreviews.forEach((item)=>{
                    item.classList.add("hidden");
                    item.classList.add("hide");
                    item.classList.remove("active");
                    item.classList.remove("relative");
                    item.classList.add("block");
                });
            }, 1);
            // - Hide elements
            this.#hideElements();
            // - Style text content
            const [theArticleData] = articleObjects.filter((item)=>item.title === theArticle.querySelector(".article-h2").textContent.trim());
            this.styleText(theArticleData);
        //
        } else {
            // - If article wasn't open, show all previews
            setTimeout(()=>{
                const allPreviewsList = document.querySelectorAll(".article-preview");
                const allPreviews = Array.from(allPreviewsList);
                allPreviews.forEach((item)=>{
                    item.classList.remove("hidden");
                    item.classList.remove("hide");
                    item.classList.add("active");
                    item.classList.add("relative");
                    item.classList.remove("block");
                });
            }, 1);
            // - Hide all articles
            setTimeout(()=>{
                allArticles.forEach((item)=>{
                    item.classList.add("hidden");
                    item.classList.add("hide");
                    item.classList.remove("active");
                    item.classList.remove("relative");
                    item.classList.add("block");
                });
            }, 1);
        }
    }
    #hideElements() {
        document.getElementById("add-btn").classList.add("hide");
        document.getElementById("add-btn").classList.add("absolute");
        document.getElementById("add-btn").classList.add("sm:active");
        document.querySelector(".sorting").classList.add("hidden");
        document.querySelector(".home").classList.add("hidden");
        document.querySelector(".return").classList.remove("hidden");
        if (window.screen.width < 630) {
            const returnIcon = document.getElementById("return-id");
            returnIcon.style.setProperty("--ionicon-stroke-width", "20px");
        }
        document.querySelector(".footer-div").classList.add("hidden");
        document.querySelector(".footer-div").classList.remove("mt-80");
    }
    #showElements() {
        document.getElementById("add-btn").classList.remove("hide");
        document.getElementById("add-btn").classList.remove("absolute");
        document.querySelector(".sorting").classList.remove("hidden");
        document.querySelector(".home").classList.remove("hidden");
        document.querySelector(".return").classList.add("hidden");
        document.querySelector(".footer-div").classList.remove("hidden");
    }
    upload(articles, addHandler, updateHandler) {
        const thisObject = this;
        // - Generate article and preview data, and render preview markup
        this.form?.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            // - Close modal and delete starter message
            thisObject.togglePublishModal();
            thisObject.clearMessage();
            // - Get tag
            const tag = document.getElementById("tag");
            // - Create NEW article data
            thisObject.article = data;
            thisObject.article.tag = tag.value;
            thisObject.article.date = thisObject.#date();
            thisObject.article.id = thisObject.#getRandomNumber();
            thisObject.article.opened = false;
            thisObject.#clearInput();
            // - Create NEW preview data
            thisObject.preview = {
                title: thisObject.article.title,
                description: thisObject.article.description,
                tag: thisObject.article.tag,
                imageURL: thisObject.article.imageURL,
                content: thisObject.article.content,
                id: thisObject.#getRandomNumber()
            };
            thisObject.renderPreview(thisObject.preview);
            // - Upon creating new article sort by 'All'
            const sortTagMenu = document.getElementById("sort-tag-menu");
            sortTagMenu.value = "#All";
            localStorage.setItem("currentTag", sortTagMenu.value);
            const sortMessage = document.getElementById("sort-message");
            sortMessage?.remove();
            // - Hide all articles
            const allArticlesList = document.querySelectorAll(".article-element");
            const allArticles = Array.from(allArticlesList);
            allArticles.forEach((item)=>{
                item.classList.add("hidden");
                item.classList.add("hide");
                item.classList.remove("active");
                item.classList.remove("relative");
                item.classList.add("block");
            });
            const allPreviewNodes = document.querySelectorAll(".article-preview");
            const allPreviews = Array.from(allPreviewNodes);
            // - Show all previews
            allPreviews.forEach((item)=>{
                item.classList.remove("hidden");
                item.classList.remove("hide");
                item.classList.add("active");
                item.classList.add("relative");
                item.classList.remove("block");
            });
            thisObject.#showElements();
            // - Create preview and article objects in state
            addHandler();
        });
        // - Generate current article markup
        window.addEventListener("click", (e)=>{
            if (e.target.closest("#preview-btn") || e.target.closest(".dropdown-item")) {
                const previewBtn = e.target.closest("#preview-btn");
                const bookmarkItem = e.target.closest(".dropdown-item");
                let preview;
                // - Find current preview markup
                if (previewBtn?.closest(".article-preview")) preview = previewBtn.closest(".article-preview");
                const previewH2 = preview?.querySelector(".preview-h2").innerText;
                const allArticleNodes = document.querySelectorAll(".article-element");
                const allArticles = Array.from(allArticleNodes);
                // - Find current article
                const [currentArticle] = allArticles.filter((item)=>item.querySelector(".article-h2").textContent.trim() === previewH2);
                // -- If current article exists, or article is opened by bookmark
                if (currentArticle || e.target.closest(".dropdown-item")) {
                    // - Find current preview markup
                    if (previewBtn?.closest(".article-preview")) preview = previewBtn.closest(".article-preview");
                    // - If article is opened by preview
                    const previewH2 = preview?.querySelector(".preview-h2").innerText;
                    // - If article is opened by bookmark
                    const bookmarkH2 = bookmarkItem?.querySelector(".bookmark-h2").textContent.trim();
                    // - Hide all article previews
                    const allPreviewNodes = document.querySelectorAll(".article-preview");
                    const allPreviews = Array.from(allPreviewNodes);
                    allPreviews.forEach((item)=>{
                        item.classList.add("hidden");
                        setTimeout(()=>{
                            item.classList.add("hide");
                            item.classList.remove("active");
                            item.classList.remove("relative");
                            item.classList.add("block");
                        }, 1);
                    });
                    const allArticlesNodes = document.querySelectorAll(".article-element");
                    const allArticles = Array.from(allArticlesNodes);
                    // - Find current article
                    const [theArticle] = allArticles.filter((item)=>previewH2 ? item.querySelector(".article-h2").textContent.trim() === previewH2 : item.querySelector(".article-h2").textContent.trim() === bookmarkH2);
                    // - Hide all other articles
                    allArticles.forEach((item)=>{
                        item.classList.add("hidden");
                        item.classList.add("hide");
                        item.classList.remove("active");
                        item.classList.remove("relative");
                        item.classList.add("block");
                    });
                    // - Show current article
                    theArticle.classList.remove("hidden");
                    setTimeout(()=>{
                        theArticle.classList.remove("hide");
                        theArticle.classList.add("active");
                        theArticle.classList.add("relative");
                        theArticle.classList.remove("block");
                    }, 2);
                    // - Update state and storage with new property value
                    const articleH2 = theArticle.querySelector(".article-h2").textContent.trim();
                    const [articleData] = articles.filter((item)=>item.title === articleH2);
                    articleData.opened = true;
                    updateHandler(articleData, articleH2);
                    thisObject.#hideElements();
                    this.styleText(articleData);
                    return;
                }
                // --== If current article doesn't exist ==--
                // - Hide all article previews
                const allPreviewNodes = document.querySelectorAll(".article-preview");
                const allPreviews = Array.from(allPreviewNodes);
                allPreviews.forEach((item)=>{
                    item.classList.add("hidden");
                    item.classList.add("hide");
                    item.classList.remove("active");
                    item.classList.remove("relative");
                    item.classList.add("block");
                });
                const [theArticleData] = articles.filter((item)=>item.title === previewH2);
                this.renderArticle(theArticleData);
                this.styleText(theArticleData);
                thisObject.#hideElements();
                const allArticlesList = document.querySelectorAll(".article-element");
                const allArticlesArray = Array.from(allArticlesList);
                // - Animate and show new article
                const [newArticle] = allArticlesArray.filter((item)=>item.querySelector(".article-h2").textContent.trim() === previewH2);
                newArticle.classList.remove("hidden");
                setTimeout(()=>{
                    newArticle.classList.remove("hide");
                    newArticle.classList.add("active");
                    newArticle.classList.add("relative");
                    newArticle.classList.remove("block");
                }, 1);
                // - Update state and storage with new property value
                const articleH2 = newArticle.querySelector(".article-h2").textContent.trim();
                const [articleData] = articles.filter((item)=>item.title === articleH2);
                articleData.opened = true;
                updateHandler(articleData, articleH2);
            }
        });
    }
    returnToPreviews(articleObjects, updateHandler) {
        const returnBtn = document.querySelector(".return");
        returnBtn?.addEventListener("click", ()=>{
            // - Hide current article
            const allArticlesList = document.querySelectorAll(".article-element");
            const articles = Array.from(allArticlesList);
            const [theArticle] = articles.filter((item)=>!item.classList.contains("hide"));
            const articleH2 = theArticle.querySelector(".article-h2").textContent.trim();
            // - Update state and storage with new property value
            const [articleData] = articleObjects.filter((item)=>item.title === articleH2);
            articleData.opened = false;
            updateHandler(articleData, articleH2);
            theArticle.classList.add("hidden");
            setTimeout(()=>{
                theArticle.classList.add("hide");
                theArticle.classList.remove("active");
                theArticle.classList.remove("relative");
                theArticle.classList.add("block");
            }, 1);
            // - Show all article previews
            const allPreviewNodes = document.querySelectorAll(".article-preview");
            const allPreviews = Array.from(allPreviewNodes);
            allPreviews.forEach((item)=>{
                item.classList.remove("hidden");
                setTimeout(()=>{
                    item.classList.remove("hide");
                    item.classList.add("active");
                    item.classList.add("relative");
                    item.classList.remove("block");
                }, 1);
            });
            this.#showElements();
        });
    }
    renderPreview(data) {
        this.#btnParentEl?.insertAdjacentHTML("afterend", this.#generatePreview(data));
    }
    renderArticle(data) {
        this.#btnParentEl?.insertAdjacentHTML("afterend", this.#generateArticle(data));
    }
    #generatePreview(data) {
        return `
         <article id="${data.id}" class="article-preview relative mt-14 sm:mt-10 transition duration-300 hide">
            <div class="flex items-center justify-center md:flex-col pb-16 md:pb-8 sm:pb-4">
               <div class="relative px-16 py-6 text-center w-96 bg-slate-200 md:bg-[#ebeff5] md:order-1 md:w-full md:px-20 md:py-12 dark:bg-slate-600 sm:px-2 sm:py-4 sm:pb-6 transition duration-300">
                  <h2 class="preview-h2 mb-1 text-5xl bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4] md:text-6xl md:mb-1 sm:text-4xl" style="background-clip: text;
                  -webkit-text-fill-color: transparent;">${data.title}</h2>
                  <h3 class="preview-h3 text-lg leading-6 text-slate-400 dark:text-slate-400 md:text-2xl md:mb-4 md:dark:text-slate-400 sm:text-base sm:mb-1 sm:w-4/5 sm:mx-auto">${data.description}</h3>
                  <a href="#" class="focus:outline-none">
                     <button id="preview-btn" class="relative transition rounded-full shadow-sm pl-4 pr-10 py-1 pb-[7.5px] mt-4 text-white bg-slate-400 hover:bg-white hover:text-slate-500 dark:text-slate-700 dark:bg-slate-400 dark:hover:bg-[#293444] dark:hover:text-slate-200 md:text-2xl md:pl-6 md:pr-12 md:py-3 md:pb-4 sm:text-xl sm:pl-4 sm:pr-10 sm:py-2 sm:pb-[11px] outline-shadow">Read more <span class="absolute pt-[1.2px] pl-2 xl:pt-[0px] sm:mt-[-1.8px]">&rarr;</span></button>
                  </a>

                  <span class="tag-element absolute top-0 left-0 text-sm rounded-full rounded-t-none rounded-l-none bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-[#9facbf] px-2 py-[0.15rem] pb-[0.3rem] pr-[1rem] opacity-75 md:hide">${data.tag}</span>
               </div>
               <img class="preview-img w-2/5 2xl:w-1/2 md:w-full" src="${data.imageURL}" alt="">
               <span class="tag-elements hide md:active absolute sm:opacity-75 top-0 left-0 md:text-xl sm:text-base font-normal rounded-full rounded-t-none rounded-l-none dark:bg-slate-600 dark:text-slate-300 bg-slate-100 text-slate-500 py-1 px-3 pr-6 pb-[0.4rem] sm:py-[0.1rem] sm:px-[0.5rem] sm:pb-[0.2rem] sm:pr-4">${data.tag}</span>
            </div>
            <div class="preview-styling h-[1px] bg-gradient-to-r from-white via-[#c3c0db] to-white dark:from-slate-500 dark:via-[#9895b7] dark:to-slate-500 md:hidden"></div>
         </article>
      `;
    }
    #generateArticle(data) {
        return `
         <article
         id="${data.id}"
         class="article-element relative transition-all duration-300 flex flex-col justify-self-center w-5/12 gap-8 py-10 pb-12 2xl:w-7/12 lg:w-3/4 md:px-6 md:w-5/6 sm:w-full sm:gap-6 sm:px-8 sm:py-8 sm:pb-6 dark:bg-slate-500 sm:dark:bg-slate-600 bg-white sm:mb-14 hide"
         >
            <div id="bookmarks" class="bookmarks mt-28 absolute ml-[-102px] 2xl:ml-[-100px] lg:ml-[-92px] md:ml-[-72px] sm:self-end sm:mr-9 sm:mt-[-38px]">
               <ion-icon class="bookmark-thin absolute cursor-pointer text-5xl hover:scale-90 transition duration-200 text-slate-300 dark:text-slate-400 hover:text-slate-400 dark:hover:text-slate-300 sm:text-slate-400 sm:dark:text-[#828fa1] sm:active" name="bookmark-outline" style="--ionicon-stroke-width: 14px;"></ion-icon>
               <ion-icon class="absolute hover:scale-90 cursor-pointer text-5xl transition duration-200 text-slate-300 dark:text-slate-400 hover:text-slate-400 dark:hover:text-slate-300 bookmark-full sm:text-[#bfc8d4] sm:dark:text-[#828fa1] hidden" name="bookmark"></ion-icon>
            </div>

            <div class="flex flex-col gap-2 sm:gap-2">
               <h2 class="article-h2 text-7xl sm:text-6xl pb-2 sm:pb-0 bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4]" style="
               background-clip: text;
               -webkit-text-fill-color: transparent;
               ">${data.title}
               </h2>
               <h3 class="article-h3 text-3xl text-slate-400 dark:text-slate-400 sm:text-2xl">${data.description}
               </h3>
            </div>

            <div
               class="a-div mt-2 sm:mt-0 h-[1px] bg-gradient-to-r from-slate-400 sm:from-[#a9b5c6] to-white dark:from-slate-400 dark:to-slate-500 sm:dark:to-slate-600"
            ></div>

            <div class="tag-parent flex justify-between items-center sm:pt-1">
               <span class="delete-span mt-[-12px] sm:mt-[-20px] text-slate-500 dark:text-slate-300 sm:text-base">Posted on ${data.date}</span>

               <span class="tag-element bg-[#d5dde7] dark:bg-slate-600 sm:dark:bg-slate-700 px-3 py-1 pb-[0.3rem] pr-[0.85rem] sm:py-[0.1rem] sm:pb-[0.13rem] sm:px-[0.6rem] rounded-full mt-[-14px] sm:mt-[-20px] font-medium text-slate-500 dark:text-slate-400 sm:text-base">${data.tag}</span>
            </div>

            <img class="article-img mb-8 sm:mb-2" src="${data.imageURL}" alt="Article Image">

            <p class="article-p text-2xl leading-[1.9rem] text-justify sm:leading-[1.65rem] text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700" style="font-family: 'Cormorant Garamond', serif;">${data.content}</p>

            <div
                  class="h-[1px] 2xl:h-[1px] xl:h-[0.9px] md:h-[1.5px] sm:h-[1px] bg-gradient-to-l sm:bg-gradient-to-r from-slate-400 sm:from-[#a9b5c6] to-white dark:from-slate-400 dark:to-slate-500 sm:dark:to-slate-600 mt-10"
               ></div>

            <div class="flex items-center justify-end sm:justify-start gap-4 sm:gap-3">
               <ion-icon id="edit-btn" class="edit-btn cursor-pointer transition text-5xl text-slate-400 hover:brightness-125 sm:text-4xl" name="create-outline"></ion-icon>
               <span class="options-span text-slate-400 text-3xl">\u{2022}</span>
               <button id="delete-btn" class="delete-btn-container hover:dark:brightness-125 transition cursor-pointer outline-shadow focus:rounded-md">
                  <?xml version="1.0" encoding="UTF-8"?><svg width="42px" height="42px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="rgba(226,146,142,1)"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="rgba(226,146,142,1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="rgba(226,146,142,1)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               </button>
            </div>
            <div class="empty-div"></div>
         </article>
      `;
    }
    #clearInput() {
        const inputElements = document.querySelectorAll(".input-element");
        inputElements.forEach((el)=>el.value = "");
    }
    #getRandomNumber() {
        return Math.round(Math.random() * ((0, _configJs.MAX) - (0, _configJs.MIN)) + (0, _configJs.MIN));
    }
    #date() {
        const now = new Date();
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        const locale = navigator.language;
        return new Intl.DateTimeFormat(locale, options).format(now);
    }
    observer() {
        const chevron = document.querySelector(".chevron");
        const header = document.querySelector(".header");
        const footer = document.querySelector(".footer");
        const observeChevron = new IntersectionObserver(function(entries) {
            const ent = entries[0];
            !ent.isIntersecting ? chevron.classList.add("active") : chevron.classList.remove("active");
        }, {
            root: null,
            threshold: 0,
            rootMargin: "0px"
        });
        observeChevron.observe(header);
        observeChevron.observe(footer);
    }
}
exports.default = new ArticleView();

},{"./view.js":"bWlJ9","../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MIN", ()=>MIN);
parcelHelpers.export(exports, "MAX", ()=>MAX);
const MIN = 1111111111;
const MAX = 9999999999;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class BookmarkView extends (0, _viewJsDefault.default) {
    #dropdownParent = document.querySelector(".bookmark-parent");
    #dropdownBtn = document.querySelector(".dropdown-btn");
    #bookmarkContainer = document.querySelector(".bookmark-container");
    #dropdownItems = [];
    #bookmarkH2s = [];
    articleH2;
    renderBookmarks(bookmarkObjects) {
        bookmarkObjects.forEach((item)=>{
            if (!item.rendered) {
                this.#renderBookmark(item);
                item.rendered = true;
            }
        });
    }
    toggleDropdown(bookmarks) {
        const thisObject = this;
        thisObject.#renderBookmarkMessage();
        this.#dropdownBtn?.addEventListener("click", function() {
            // - If no bookmark exist
            if (bookmarks.length === 0) {
                thisObject.#bookmarkContainer.classList.toggle("dropdown-active");
                thisObject.#dropdownBtn.classList.add("focus:dark:brightness-125");
                thisObject.#dropdownBtn.classList.add("focus:brightness-125");
                document.querySelector(".backdrop-div").classList.add("backdrop-blur-xl");
                thisObject.#exitDropdown();
                return;
            }
            // - If any bookmark exists
            const bookmarkMsg = document.querySelector(".bookmark-message");
            bookmarkMsg?.remove();
            thisObject.#bookmarkContainer.classList.toggle("dropdown-active");
            document.querySelector(".backdrop-div").classList.add("backdrop-blur-xl");
            thisObject.#dropdownBtn.classList.add("focus:dark:brightness-125");
            thisObject.#dropdownBtn.classList.add("focus:brightness-125");
            thisObject.#exitDropdown();
        });
    }
    #renderBookmarkMessage() {
        this.#dropdownParent?.insertAdjacentHTML("afterend", this.#generateBookmarkMessage());
    }
    #generateBookmarkMessage() {
        return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl md:w-3/4 md:text-5xl md:py-12 md:px-16 md:mx-auto md:mt-40 md:shadow-none sm:mt-48 sm:py-6 sm:px-12 sm:text-3xl sm:w-11/12">You haven't saved any articles yet!</span>
      `;
    }
    #exitDropdown() {
        const thisObject = this;
        // - Remove focus on container on click or mouseleave
        if (window.matchMedia("(pointer: coarse)").matches) //
        this.#bookmarkContainer.addEventListener("click", function() {
            thisObject.#bookmarkContainer.classList.remove("dropdown-active");
            thisObject.#dropdownBtn.classList.remove("focus:dark:brightness-125");
            thisObject.#dropdownBtn.classList.remove("focus:brightness-125");
            document.querySelector(".backdrop-div").classList.remove("backdrop-blur-xl");
        });
        else //
        this.#bookmarkContainer.addEventListener("mouseleave", function() {
            thisObject.#bookmarkContainer.classList.remove("dropdown-active");
            thisObject.#dropdownBtn.classList.remove("focus:dark:brightness-125");
            thisObject.#dropdownBtn.classList.remove("focus:brightness-125");
            document.querySelector(".backdrop-div").classList.remove("backdrop-blur-xl");
        });
    }
    persistBookmarkIcon(articles) {
        // - Fetch all bookmarked articles
        const theArticles = articles.filter((article)=>article.isBookmarked === true);
        const ids = theArticles.map((article)=>article.id);
        // - Fetch all article markups
        const allArticles = [
            ...document.getElementsByTagName("article")
        ];
        // - Filter out all previews
        const filteredArticles = allArticles.filter((item)=>!item.classList.contains("article-preview"));
        const articleIDs = filteredArticles.map((article)=>+article.id);
        // - Filter out only bookmarked articles
        const bookmarkedArticles = articleIDs.filter((articleID)=>ids.includes(articleID));
        const articleStringsID = bookmarkedArticles.map((article)=>article.toString());
        // - Based on article ID, style all bookmarked articles
        articleStringsID.forEach((currentStringID)=>{
            const currentMarkup = document.getElementById(`${currentStringID}`);
            // - Change icon
            const bookmarkBtnThin = currentMarkup.querySelector(".bookmark-thin");
            const bookmarkBtnFull = currentMarkup.querySelector(".bookmark-full");
            bookmarkBtnThin?.classList.add("hidden");
            bookmarkBtnFull?.classList.remove("hidden");
            // - Adapt dropdown btn icon
            const iconThin = this.#dropdownBtn.querySelector(".bookmark-outline");
            const iconFull = this.#dropdownBtn.querySelector(".bookmark-filled");
            if (iconThin.classList.contains("hide")) {
                iconThin.classList.remove("hide");
                iconThin.classList.add("active");
                iconFull.classList.add("hide");
                iconFull.classList.remove("active");
            }
            if (iconFull.classList.contains("hide")) {
                iconFull.classList.remove("hide");
                iconFull.classList.add("active");
                iconThin.classList.add("hide");
                iconThin.classList.remove("active");
            }
        });
    }
    createBookmark(handleAdd, handleDelete) {
        window.addEventListener("click", (e)=>{
            if (e.target.closest("#bookmarks")) {
                const bookmarks = e.target.closest("#bookmarks");
                const bookmarkBtnThin = bookmarks.querySelector(".bookmark-thin");
                const bookmarkBtnFull = bookmarks.querySelector(".bookmark-full");
                const articleMarkup = bookmarks.closest(".article-element");
                // - If article is not bookmarked
                if (bookmarkBtnFull.classList.contains("hidden")) {
                    // - Change icon
                    bookmarkBtnThin.classList.add("hidden");
                    bookmarkBtnFull.classList.remove("hidden");
                    // - Adapt dropdown btn icon
                    const iconThin = this.#dropdownBtn.querySelector(".bookmark-outline");
                    const iconFull = this.#dropdownBtn.querySelector(".bookmark-filled");
                    iconThin.classList.add("hide");
                    iconFull.classList.remove("hide");
                    iconFull.classList.add("active");
                    if (iconThin.classList.contains("active")) iconThin.classList.remove("active");
                    // - Get header content
                    this.articleH2 = articleMarkup.querySelector(".article-h2").innerText;
                    // - Create bookmark object in state
                    handleAdd();
                //
                } else {
                    // - If article is bookmarked
                    // - Change icon
                    bookmarkBtnFull.classList.add("hidden");
                    bookmarkBtnThin.classList.remove("hidden");
                    // - Adapt dropdown btn icon
                    const iconThin = this.#dropdownBtn.querySelector(".bookmark-outline");
                    const iconFull = this.#dropdownBtn.querySelector(".bookmark-filled");
                    const allBookmarkFullNodes = document.querySelectorAll(".bookmark-full");
                    const allBookmarkFullBtnsArray = Array.from(allBookmarkFullNodes);
                    bookmarkBtnFull.classList.add("hidden");
                    const check = allBookmarkFullBtnsArray.every((fullBtn)=>fullBtn.classList.contains("hidden"));
                    if (check) {
                        iconFull.classList.add("hide");
                        iconFull.classList.remove("active");
                        iconThin.classList.remove("hide");
                        iconThin.classList.add("active");
                    }
                    // - Fetch all bookmark markups
                    const allDropdownItemsNodes = document.querySelectorAll(".dropdown-item");
                    this.#dropdownItems = Array.from(allDropdownItemsNodes);
                    // - Get header content
                    this.articleH2 = articleMarkup.querySelector(".article-h2").innerText;
                    // - Get bookmark headers
                    this.#bookmarkH2s = this.#dropdownItems.map((item)=>item?.querySelector(".bookmark-h2").textContent.trim());
                    const [filteredString] = this.#bookmarkH2s.filter((bookmarkH2)=>bookmarkH2 === this.articleH2);
                    const [theItem] = this.#dropdownItems.filter((item)=>item?.querySelector(".bookmark-h2").textContent.trim() === filteredString);
                    // - Delete currently clicked item's markup from this array
                    const [theBookmarkMarkup] = this.#dropdownItems.filter((bookmark)=>bookmark.querySelector(".bookmark-h2").textContent.trim() === this.articleH2);
                    const theBookmarkMarkupIndex = this.#dropdownItems.indexOf(theBookmarkMarkup);
                    this.#dropdownItems.splice(theBookmarkMarkupIndex, 1);
                    // - Delete clicked bookmark from bookmarkh2s array
                    const [theBookmark] = this.#bookmarkH2s.filter((bookmark)=>bookmark === this.articleH2);
                    const theBookmarkIndex = this.#bookmarkH2s.indexOf(theBookmark);
                    this.#bookmarkH2s.splice(theBookmarkIndex, 1);
                    // - Delete bookmark data from state
                    handleDelete();
                    // - Delete bookmark markup
                    theItem?.remove();
                    const bookmarkMsg = document.querySelector(".bookmark-message");
                    if (!bookmarkMsg) this.#renderBookmarkMessage();
                }
            }
        });
    }
    #renderBookmark(data) {
        this.#dropdownParent?.insertAdjacentHTML("afterend", this.#generateMarkup(data));
    }
    #generateMarkup(data) {
        return `
         <a href="#${data.bookmarkID}" class="dropdown-item text-2xl text-slate-300 " style="filter: drop-shadow(0 1.5rem 2rem rgba(0, 0, 0, 0.342))">
                  <div class="grid items-center grid-cols-2 transition-all sm:grid-cols-1 hover:brightness-110">
                     <img class="bookmark-image object-cover w-full h-48 sm:h-28" src="${data.imageURL}" alt="Bookmark Image">
                     <div class="p-8 bg-slate-50 dark:bg-slate-800 sm:flex sm:flex-col sm:gap-1 sm:px-12 sm:pt-5 sm:pb-7  sm:bg-white">
                        <h2 class="bookmark-h2 text-3xl transition text-slate-500 dark:text-slate-200 sm:text-2xl sm:text-slate-600">${data.title}
                        </h2>
                        <h3 class="bookmark-h3 text-lg sm:text-base text-slate-400 dark:text-[#a9b5c6]">${data.description}
                        </h3>
                     </div>
                  </div>
               </a>
      `;
    }
}
exports.default = new BookmarkView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzFfI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class EditView extends (0, _viewJsDefault.default) {
    data;
    articleH2;
    showEditModal(updateHandler, articleObjects) {
        window.addEventListener("click", (e)=>{
            const thisObject = this;
            if (e.target.closest("#edit-btn")) {
                const editBtn = e.target.closest("#edit-btn");
                const article = editBtn.closest(".article-element");
                const [articleObject] = articleObjects.filter((item)=>item.title === article.querySelector(".article-h2").innerText);
                const articleData = {
                    title: articleObject.title,
                    description: articleObject.description,
                    tag: articleObject.tag,
                    imageURL: articleObject.imageURL,
                    content: articleObject.content
                };
                thisObject.articleH2 = articleData.title;
                this.#showModal(articleData);
                // - Show and animate edit modal
                const editModal = document.getElementById("edit-modal");
                editModal.classList.add("active");
                setTimeout(()=>{
                    editModal.classList.remove("hide");
                }, 1);
                // - Fetch current preview
                const allPreviewNodes = document.querySelectorAll(".article-preview");
                const allPreviews = Array.from(allPreviewNodes);
                const [preview] = allPreviews.filter((item)=>item.querySelector(".preview-h2").textContent === thisObject.articleH2);
                // - Show current tag
                const selectEl = document.getElementById("tag");
                const optionsHTML = selectEl.getElementsByTagName("option");
                const options = Array.from(optionsHTML);
                const [filteredOption] = options.filter((item)=>item.value === articleData.tag);
                const sortTagMenu = document.getElementById("edit-tag");
                sortTagMenu.value = filteredOption?.value;
                articleData.tag = sortTagMenu.value;
                // - Submit form and exit modal
                this.#submitForm(article, preview, updateHandler);
                this.#exitEditModal();
            }
            this.#showInfo();
        });
    }
    #showInfo() {
        const infoIcon = document.querySelector(".info-icon-edit");
        infoIcon?.addEventListener("mouseover", function() {
            const mdInfo = document.querySelector(".md-info-edit");
            mdInfo.classList.remove("hide");
            mdInfo.classList.add("active");
        });
        infoIcon?.addEventListener("mouseout", function() {
            const mdInfo = document.querySelector(".md-info-edit");
            mdInfo.classList.add("hide");
            mdInfo.classList.remove("active");
        });
    }
    #submitForm(article, preview, updateHandler) {
        const thisObject = this;
        const form = document.getElementById("edit-content");
        form?.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            const sortTagMenu = document.getElementById("edit-tag");
            data.tag = sortTagMenu.value;
            data.opened = true;
            // - Update article markup
            article.querySelector(".article-h2").innerText = data.title;
            article.querySelector(".article-h3").innerText = data.description;
            article.querySelector(".article-img").src = data.imageURL;
            article.querySelector(".article-p").textContent = data.content;
            article.querySelector(".tag-element").innerText = data.tag;
            // - Update preview markup
            preview.querySelector(".preview-h2").innerText = data.title;
            preview.querySelector(".preview-h3").innerText = data.description;
            preview.querySelector(".preview-img").src = data.imageURL;
            preview.querySelector(".tag-element").innerText = data.tag;
            // - Update bookmark markup
            const bookmarkMarkups = [];
            const bookmarkNodes = document.querySelectorAll(".dropdown-item");
            bookmarkNodes.forEach((item)=>bookmarkMarkups.push(item));
            let theBookmark;
            if (bookmarkMarkups.length > 0) {
                [theBookmark] = bookmarkMarkups.filter((item)=>item.querySelector(".bookmark-h2").textContent.trim() === thisObject.articleH2);
                if (theBookmark) {
                    theBookmark.querySelector(".bookmark-h2").textContent = data.title;
                    theBookmark.querySelector(".bookmark-h3").textContent = data.description;
                    theBookmark.querySelector(".bookmark-image").src = data.imageURL;
                }
            }
            thisObject.data = data;
            thisObject.styleText(thisObject.data);
            updateHandler();
            // - Close modal
            const editModal = document.getElementById("edit-modal");
            editModal.classList.add("hide");
            thisObject.#timeoutExit();
        });
    }
    #showModal(data) {
        document.body.insertAdjacentHTML("afterbegin", this.#generateEditModal(data));
    }
    #generateEditModal(data) {
        return `
         <section
            id="edit-modal"
            class="fixed z-40 top-0 left-0 flex justify-center w-full h-full pt-6 2xl:pt-8 xl:pt-20 lg:pt-8 md:pt-20 sm:pt-0 backdrop-blur-xl bg-[#6d768560] dark:bg-[#d4dae360] hide"
            style="transition: 0.4s"
         >
            <form
               id="edit-content"
               class="relative flex flex-col gap-4 w-1/2 p-8 pb-10 sm:gap-4 2xl:w-2/3 2xl:p-6 xl:w-3/4 xl:p-10 lg:p-6 md:w-5/6 md:py-10 sm:px-4 sm:py-8 sm:pb-8 h-min sm:h-screen bg-slate-100 dark:bg-slate-600 sm:w-full"
            >

               <span id="exit-edit-btn" class="absolute h-20 text-5xl transition opacity-75 cursor-pointer top-4 right-5 text-slate-400 hover:text-slate-500 hover:dark:text-slate-200 2xl:top-2 2xl:right-3 sm:text-4xl sm:top-2 sm:right-2"><ion-icon name="close-outline"></ion-icon></span>

               <!-- Heading -->

               <div class="flex flex-col gap-[0.35rem] sm:gap-[0.2rem] pb-2">
                  <h2
                     class="text-5xl 2xl:text-6xl lg:text-5xl sm:text-3xl  font-bold text-center dark:text-slate-100 bg-gradient-to-r from-slate-500 to-[#7a75aa] dark:from-white dark:to-[#bdbad5]"
                     style="
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                     "
                  >
                     Edit article
                  </h2>

                  <div
                     class="w-1/2 md:w-3/4 sm:w-5/6 h-[2px] sm:h-[1.1px] mx-auto bg-gradient-to-r from-slate-100 via-violet to-slate-100 dark:from-slate-600 dark:via-violet dark:to-slate-600"
                  ></div>
               </div>

               <!-- Input fields -->

               <div
                  class="flex flex-col gap-8 mb-2 text-xl font-medium text-slate-400 xl:gap-6 md:gap-8 sm:text-base sm:gap-4 sm:mb-[-1px] pt-8 2xl:pt-0 xl:pt-4 sm:pt-0"
               >
                  <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                     <span>title</span>
                     <input 
                     id="title" 
                     class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md" 
                     type="text" 
                     name="title"
                     value="${data.title}"
                     style="font-family: 'Cormorant Garamond', serif;"
                     required />

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                  ></div>
                  </div>

                  <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                     <span>description</span>
                     <input
                        id="description"
                        class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md"
                        type="text" 
                        name="description"
                        value="${data.description}"
                        style="font-family: 'Cormorant Garamond', serif;"
                        required
                     ></input>

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                  ></div>
                  </div>

                  <div class="grid items-center gap-20 two-columns sm:grid-cols-2 sm:gap-4">                   
                     <div class="flex flex-col gap-2 sm:gap-[0.1rem]">
                        <span>image (insert URL)</span>
                        <input
                        id="image"
                        class="text-[1.6rem] sm:text-xl text-slate-500 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 input-element outline-shadow focus:rounded-md"
                        name="imageURL"
                        style="font-family: 'Cormorant Garamond', serif;"
                        value="${data.imageURL}"
                        required
                        ></input>

                        <div
                        class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                        ></div>
                     </div>

                     <!-- SORTING -->
             
                     <div class="flex flex-col gap-1 py-2 pl-4 pr-3 rounded-full bg-slate-100 dark:bg-slate-600">
                        <label class="text-xl text-slate-400 dark:text-slate-400 sm:text-base" for="tag">category</label>
                        <select class="cursor-pointer pb-[0.2rem] pl-3 rounded-full rounded-tl-none text-2xl text-slate-500 dark:text-slate-300 bg-[#dbe2ea] dark:bg-slate-500 w-3/4 sm:w-full sm:text-xl outline-shadow" id="edit-tag"">
                           <option value="#History">history</option>
                           <option value="#Politics">politics</option>
                           <option value="#Religion">religion</option>
                           <option value="#Cooking">cooking</option>
                           <option value="#Health">health</option>
                           <option value="#IT">it</option>
                           <option value="#Sports">sports</option>
                           <option value="#Gaming">gaming</option>
                           <option value="#Movies">movies</option>
                           <option value="#Other">other</option>
                        </select>
                     </div>
                  </div>

                  <div class="flex flex-col gap-2 sm:gap-[0.4rem]">
                     <div class="relative flex gap-3">
                        <span>content</span>
                        <div class="info-icon-edit absolute left-[5.2rem] top-[0.2rem] sm:left-[4.2rem] sm:top-[0rem] h-6 mb-[-10px] pl-[0.52rem] lg:pl-[0.56rem] rounded-full cursor-pointer w-6 bg-[#dbe2ea] dark:bg-[#404d5f]">
                        <span class="absolute bottom-[0.001rem]" style="font-family: serif; font-style: italic">i</span>
                        </div>

                        <div class="md-info-edit w-[26rem] absolute px-4 py-2 rounded-3xl left-[7.5rem] sm:w-[25rem] sm:left-[-10px] sm:top-[1.8rem] text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-500 shadow-xl transition-all duration-200 sm:pb-4 sm:pt-3 hide">
                           <ul class="pl-6 list-disc">
                              <div class="flex flex-col gap-[0.08rem] items-center pr-6">
                                 <span class="text-[1.25rem]">Markdown conventions</span>
                                 <div
                                 class="w-full md:w-3/4 sm:w-5/6 h-[1px] sm:h-[1.1px] mx-auto bg-gradient-to-r from-white via-violet to-white dark:from-slate-500 dark:via-violet dark:to-slate-500 mb-2"
                                 ></div>
                              </div>
                              <li>#, ##, ### &nbsp; &nbsp; <span class="text-[#9facbf]">-h1, h2, h3</span></li>
                              <li>___ , ---, *** &nbsp; &nbsp; <span class="text-[#9facbf]">-Horizontal Rules</span></li>
                              <li>>, >>, >>> &nbsp; &nbsp; <span class="text-[#9facbf]">-Blockquotes</span></li>
                              <li>1., 2., 3. &nbsp; &nbsp; <span class="text-[#9facbf]">-Ordered list</span></li>
                              <li>+, -, * &nbsp; &nbsp; <span class="text-[#9facbf]">-Unordered list</span></li>
                              <li>![Image name](Insert URL) &nbsp; <span class="text-[#9facbf]">-Add image</span></li>
                              <li>*<em>italic</em>*, <em>_italic_</em></li>
                              <li>**<strong>bold</strong>**, __<strong>bold</strong>__</li>
                           </ul>
                        </div>
                     </div>

                     <textarea
                        id="content"
                        class="h-48 text-[1.6rem] sm:text-xl leading-8 text-slate-500 bg-slate-100 dark:text-slate-300 dark:bg-slate-600 sm:h-[25.2vh] input-element outline-shadow focus:rounded-md"
                        name="content"
                        style="font-family: 'Cormorant Garamond', serif;"
                        required
                     >${data.content}</textarea>

                     <div
                     class="w-full mt-[-5px] h-[1px] sm:h-[0.5px] sm:mt-[-0.8px] bg-slate-300 dark:bg-slate-500"
                     ></div>
                  </div>
               </div>

               <!-- Buttons -->

               <div
                  class="flex items-center justify-center gap-4 my-3 text-3xl 2xl:mb-2 xl:mt-0 lg:mt-0 md:mt-4 sm:mb-2 sm:mt-2""
               >
                  <div
                     class="rounded-full text-slate-500 bg-gradient-to-r from-slate-400 to-violet"
                  >
                     <button
                        class="px-10 py-4 pb-[23px] box-shadow dark:shadow-none text-5xl xl:text-4xl xl:px-8 xl:py-2 xl:pb-3 md:px-10 md:py-4 md:pb-[23px] sm:text-4xl rounded-full text-white bg-gradient-to-r from-slate-400 to-violet hover:from-white hover:to-white hover:text-slate-600 sm:px-8 sm:py-3 sm:pb-[18px] outline-shadow"
                     >
                        Update
                     </button>
                  </div>
               </div>
            </div>
         </section>
      `;
    }
    #exitEditModal() {
        const thisObject = this;
        const exitModalBtn = document.getElementById("exit-edit-btn");
        const form = document.getElementById("edit-content");
        const editModal = document.getElementById("edit-modal");
        // - When ESC is pressed
        window.onkeydown = (e)=>{
            if (e.key === "Escape") {
                editModal.classList.add("hide");
                this.#timeoutExit();
            }
        };
        // - By clicking outside
        editModal?.addEventListener("click", function() {
            editModal.classList.add("hide");
            thisObject.#timeoutExit();
        });
        form?.addEventListener("click", (e)=>e.stopPropagation());
        exitModalBtn?.addEventListener("click", function() {
            const editModal = document.getElementById("edit-modal");
            editModal.classList.add("hide");
            thisObject.#timeoutExit();
        });
    }
    #timeoutExit() {
        setTimeout(()=>{
            const editModal = document.getElementById("edit-modal");
            editModal?.remove();
        }, 400);
    }
}
exports.default = new EditView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hucv9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class EditView extends (0, _viewJsDefault.default) {
    #sortTagMenu = document.getElementById("sort-tag-menu");
    #parentEl = document.querySelector(".main");
    #tags = [];
    selectedTag;
    sortByTag(previews, persistHandler) {
        const currentTag = localStorage.getItem("currentTag");
        this.#sortTagMenu.value = currentTag;
        if (!this.#sortTagMenu.value) this.#sortTagMenu.value = "#All";
        previews.forEach((item)=>this.#tags.push(item.tag));
        if (this.#sortTagMenu.value !== "#All") setTimeout(()=>{
            const allPreviewNodes = document.querySelectorAll(".article-preview");
            const allPreviews = Array.from(allPreviewNodes);
            const sortedOutPreviews = allPreviews.filter((item)=>item.querySelector(".tag-element").innerText !== currentTag);
            sortedOutPreviews.forEach((item)=>{
                item.classList.add("hidden");
                item.classList.add("hide");
                item.classList.remove("active");
                item.classList.remove("relative");
                item.classList.add("block");
            });
            // - Check if any articles are visible, if they are, don't display message, otherwise display it
            const check = allPreviews.every((item)=>item.classList.contains("hidden"));
            if (!check) return;
            this.#renderSortMessage();
            const sortMessage = document.getElementById("sort-message");
            sortMessage?.classList.remove("hide");
            sortMessage?.classList.add("active");
            this.clearMessage();
        }, 1);
        this.#sortTagMenu.addEventListener("change", ()=>this.#sortArticles(persistHandler));
    }
    #sortArticles(persistHandler) {
        // - Sort articles by selected tag
        this.selectedTag = this.#sortTagMenu.value;
        // - Persist sorting option on storage
        persistHandler();
        const allPreviewNodes = document.querySelectorAll(".article-preview");
        const allPreviews = Array.from(allPreviewNodes);
        // - Reset article markups
        allPreviews.forEach((item)=>{
            item.classList.remove("hidden");
            setTimeout(()=>{
                item.classList.remove("hide");
                item.classList.add("active");
                item.classList.add("relative");
                item.classList.remove("block");
            }, 1);
        });
        // - Sorting
        const sortedOutPreviews = allPreviews.filter((item)=>item.querySelector(".tag-element").innerHTML !== this.selectedTag);
        sortedOutPreviews.forEach((item)=>{
            item.classList.add("hidden");
            setTimeout(()=>{
                item.classList.add("hide");
                item.classList.remove("active");
                item.classList.remove("relative");
                item.classList.add("block");
            }, 1);
        });
        // - When sorting by 'All', show all previews
        if (this.selectedTag === "#All") allPreviews.forEach((item)=>{
            item.classList.remove("hidden");
            setTimeout(()=>{
                item.classList.remove("hide");
                item.classList.add("active");
                item.classList.add("relative");
                item.classList.remove("block");
            }, 1);
        });
        const sortMessage = document.getElementById("sort-message");
        sortMessage?.classList.add("hide");
        sortMessage?.classList.remove("active");
        setTimeout(()=>{
            sortMessage?.classList.add("hidden");
        }, 1);
        sortMessage?.remove();
        // - If any preview is visible, don't display message, otherwise display it
        const check = allPreviews.every((item)=>item.classList.contains("hidden"));
        if (!check) return;
        this.#renderSortMessage();
        const sortMsg = document.getElementById("sort-message");
        sortMsg.classList.remove("hidden");
        setTimeout(()=>{
            sortMsg.classList.remove("hide");
            sortMsg.classList.add("active");
        }, 1);
        this.clearMessage();
        if (this.selectedTag === "#All") {
            sortMsg.classList.add("hidden");
            setTimeout(()=>{
                sortMsg.classList.add("hide");
                sortMsg.classList.remove("active");
            }, 1);
            sortMsg.remove();
            this.addMessage();
        }
    }
    #renderSortMessage() {
        this.#parentEl.insertAdjacentHTML("afterend", this.#generateSortMessage());
    }
    #generateSortMessage() {
        return `
         <div
         id="sort-message"
         class="flex flex-col items-center gap-4 mx-auto py-20 px-8 mt-24 rounded-xl text-center bg-slate-100 dark:bg-[#8593a6] w-2/5 2xl:w-3/5 lg:w-4/5 md:w-5/6 sm:mt-14 sm:py-10 sm:mb-20 hide duration-300"
         >
            <span class="text-3xl text-slate-500 dark:text-slate-700">No article in this category was found!</span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" fill="rgba(100,116,139,1)"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002ZM10.9999 16.0002H12.9999V18.0002H10.9999V16.0002ZM10.9999 9.00017H12.9999V14.0002H10.9999V9.00017Z"></path></svg>
         </div>
      `;
    }
}
exports.default = new EditView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire6ee7")

//# sourceMappingURL=index.e37f48ea.js.map
