(function () {
  // ES5/ES6+ method polyfills for older TV browsers
  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
      if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
      var list = Object(this), len = list.length >>> 0, thisArg = arguments[1];
      for (var i = 0; i < len; i++) {
        var value = list[i];
        if (predicate.call(thisArg, value, i, list)) return value;
      }
      return undefined;
    };
  }
  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
      if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
      if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
      var list = Object(this), len = list.length >>> 0, thisArg = arguments[1];
      for (var i = 0; i < len; i++) {
        if (predicate.call(thisArg, list[i], i, list)) return i;
      }
      return -1;
    };
  }
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex) {
      var o = Object(this), len = parseInt(o.length, 10) || 0;
      if (len === 0) return false;
      var n = parseInt(fromIndex, 10) || 0, k = n >= 0 ? n : Math.max(0, len + n);
      function sameValueZero(x, y) { return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)); }
      for (; k < len; k++) { if (sameValueZero(o[k], searchElement)) return true; }
      return false;
    };
  }
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      if (typeof start !== 'number') start = 0;
      if (start + search.length > this.length) return false;
      return this.indexOf(search, start) !== -1;
    };
  }
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    };
  }
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, thisLen) {
      if (thisLen === undefined || thisLen > this.length) thisLen = this.length;
      return this.substring(thisLen - search.length, thisLen) === search;
    };
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(padString || ' ');
      var str = String(this);
      if (str.length >= targetLength) return str;
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat ? padString.repeat(Math.ceil(targetLength / padString.length)) : Array(Math.ceil(targetLength / padString.length) + 1).join(padString);
      }
      return padString.slice(0, targetLength) + str;
    };
  }
  if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(padString || ' ');
      var str = String(this);
      if (str.length >= targetLength) return str;
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat ? padString.repeat(Math.ceil(targetLength / padString.length)) : Array(Math.ceil(targetLength / padString.length) + 1).join(padString);
      }
      return str + padString.slice(0, targetLength);
    };
  }
  if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
      var str = '' + this; count = +count;
      if (count < 0 || count === Infinity) throw RangeError('Invalid count value');
      count = Math.floor(count);
      if (str.length === 0 || count === 0) return '';
      var result = '';
      while (count > 0) { if (count & 1) result += str; if (count >>= 1) str += str; }
      return result;
    };
  }
  if (!Array.from) {
    Array.from = function (arrayLike) {
      var arr = [];
      if (arrayLike) for (var i = 0; i < arrayLike.length; i++) arr.push(arrayLike[i]);
      return arr;
    };
  }
  if (!Array.prototype.flat) {
    Array.prototype.flat = function (depth) {
      var d = depth === undefined ? 1 : depth;
      var flatten = function (arr, dep) {
        var out = [];
        for (var i = 0; i < arr.length; i++) {
          if (!(i in arr)) continue;
          var val = arr[i];
          if (dep > 0 && Array.isArray(val)) out = out.concat(flatten(val, dep - 1));
          else out.push(val);
        }
        return out;
      };
      return flatten(this, d);
    };
  }
  if (!Array.prototype.flatMap) {
    Array.prototype.flatMap = function (callback, thisArg) {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        if (i in this) {
          var mapped = callback.call(thisArg, this[i], i, this);
          if (Array.isArray(mapped)) {
            for (var j = 0; j < mapped.length; j++) result.push(mapped[j]);
          } else result.push(mapped);
        }
      }
      return result;
    };
  }
  if (!Object.assign) {
    Object.assign = function (target) {
      if (target == null) throw new TypeError('Cannot convert undefined or null to object');
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var next = arguments[i];
        if (next != null) {
          for (var key in next) { if (Object.prototype.hasOwnProperty.call(next, key)) to[key] = next[key]; }
        }
      }
      return to;
    };
  }
  if (!Object.entries) {
    Object.entries = function (obj) {
      var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
      while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
      return resArray;
    };
  }
  if (!Object.values) {
    Object.values = function (obj) {
      var vals = [];
      for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) vals.push(obj[key]); }
      return vals;
    };
  }
  if (!Number.isFinite) { Number.isFinite = function (value) { return typeof value === 'number' && isFinite(value); }; }
  if (!Number.isNaN) { Number.isNaN = function (value) { return typeof value === 'number' && isNaN(value); }; }
  if (!Number.isInteger) { Number.isInteger = function (value) { return typeof value === 'number' && isFinite(value) && Math.floor(value) === value; }; }

  // DOM polyfills
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do { if (el.matches && el.matches(s)) return el; el = el.parentElement || el.parentNode; } while (el && el.nodeType === 1);
      return null;
    };
  }
  if (window.NodeList && !NodeList.prototype.forEach) { NodeList.prototype.forEach = Array.prototype.forEach; }
  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) { HTMLCollection.prototype.forEach = Array.prototype.forEach; }

  // classList polyfill (basic, including toggle force)
  if (!('classList' in document.createElement('_'))) {
    (function (view) {
      if (!('Element' in view)) return;
      var classListProp = 'classList', protoProp = 'prototype', elemCtrProto = view.Element[protoProp];
      var objCtr = Object;
      var strTrim = String[protoProp].trim || function () { return this.replace(/^\s+|\s+$/g, ''); };
      var arrIndexOf = Array[protoProp].indexOf || function (item) { for (var i = 0, len = this.length; i < len; i++) { if (i in this && this[i] === item) return i; } return -1; };
      var DOMTokenList = function (el) {
        this.el = el;
        var classes = strTrim.call(el.getAttribute('class') || '').split(/\s+/);
        for (var i = 0; i < classes.length; i++) { if (classes[i]) this.push(classes[i]); }
        this._updateClassName = function () { el.setAttribute('class', this.toString()); };
      };
      var tokenProto = DOMTokenList[protoProp] = [];
      var checkTokenAndGetIndex = function (token) {
        if (token === '') throw 'SyntaxError';
        if (/\s/.test(token)) throw 'InvalidCharacterError';
        return arrIndexOf.call(this, token);
      };
      tokenProto.item = function (i) { return this[i] || null; };
      tokenProto.contains = function (token) { return checkTokenAndGetIndex.call(this, token += '') !== -1; };
      tokenProto.add = function () {
        var tokens = arguments, i = 0, l = tokens.length, token, updated = false;
        do { token = tokens[i] + ''; if (checkTokenAndGetIndex.call(this, token) === -1) { this.push(token); updated = true; } } while (++i < l);
        if (updated) this._updateClassName();
      };
      tokenProto.remove = function () {
        var tokens = arguments, i = 0, l = tokens.length, token, updated = false, index;
        do { token = tokens[i] + ''; index = checkTokenAndGetIndex.call(this, token); while (index !== -1) { this.splice(index, 1); updated = true; index = checkTokenAndGetIndex.call(this, token); } } while (++i < l);
        if (updated) this._updateClassName();
      };
      tokenProto.toggle = function (token, force) {
        token += '';
        var result = this.contains(token), method = result ? (force !== true && 'remove') : (force !== false && 'add');
        if (method) this[method](token);
        if (force === true || force === false) return force;
        return !result;
      };
      tokenProto.toString = function () { return this.join(' '); };
      if (objCtr.defineProperty) {
        try { objCtr.defineProperty(elemCtrProto, classListProp, { get: function () { return new DOMTokenList(this); } }); } catch (e) {}
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, function () { return new DOMTokenList(this); });
      }
    })(window);
  } else {
    // Some older browsers have classList but no toggle(force) or no multiple-arg add/remove
    try {
      var testEl = document.createElement('_');
      testEl.classList.toggle('t', false);
      if (testEl.classList.contains('t')) throw 1;
      testEl.classList.add('a', 'b');
    } catch (e) {
      // leave it; app rarely needs multi-arg
    }
  }

  // dataset polyfill
  if (!document.documentElement.dataset) {
    var toCamel = function (str) { return str.replace(/-([a-z])/g, function (m, c) { return c.toUpperCase(); }); };
    Object.defineProperty(Element.prototype, 'dataset', {
      get: function () {
        var element = this;
        var attributes = this.attributes;
        var map = {};
        for (var i = 0; i < attributes.length; i++) {
          var attr = attributes[i];
          if (attr && attr.name && attr.name.indexOf('data-') === 0) {
            var name = toCamel(attr.name.slice(5));
            (function (attrName) {
              Object.defineProperty(map, name, {
                enumerable: true,
                get: function () { return element.getAttribute(attrName); },
                set: function (val) { if (val === undefined) element.removeAttribute(attrName); else element.setAttribute(attrName, String(val)); }
              });
            })(attr.name);
          }
        }
        return map;
      }
    });
  }

  // scroll shims
  if (typeof window.scrollY === 'undefined' && typeof window.pageYOffset !== 'undefined') {
    try { Object.defineProperty(window, 'scrollY', { get: function () { return window.pageYOffset; } }); } catch (e) { window.scrollY = window.pageYOffset || 0; }
  }
  if (typeof window.scrollX === 'undefined' && typeof window.pageXOffset !== 'undefined') {
    try { Object.defineProperty(window, 'scrollX', { get: function () { return window.pageXOffset; } }); } catch (e) { window.scrollX = window.pageXOffset || 0; }
  }
  try {
    var origScrollTo = window.scrollTo;
    window.scrollTo = function (x, y) {
      if (x && typeof x === 'object') {
        var top = x.top != null ? x.top : (x.y != null ? x.y : (window.pageYOffset || 0));
        var left = x.left != null ? x.left : (x.x != null ? x.x : (window.pageXOffset || 0));
        return origScrollTo.call(window, left, top);
      }
      return origScrollTo.call(window, x, y);
    };
  } catch (e) {}
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function () { this.scrollTop = 0; };
  } else {
    // wrap to ignore options object on old engines
    try {
      var origSIV = Element.prototype.scrollIntoView;
      Element.prototype.scrollIntoView = function (arg) {
        try { return origSIV.call(this, arg); } catch (e) { return origSIV.call(this, !!arg); }
      };
    } catch (e) {}
  }

  // append/remove helpers
  if (!Element.prototype.append) { Element.prototype.append = function () { for (var i = 0; i < arguments.length; i++) { var n = arguments[i]; this.appendChild(typeof n === 'string' ? document.createTextNode(n) : n); } }; }
  if (!Element.prototype.remove) { Element.prototype.remove = function () { if (this.parentNode) this.parentNode.removeChild(this); }; }
  if (!('remove' in CharacterData.prototype)) { CharacterData.prototype.remove = Element.prototype.remove; }
  if (!('remove' in DocumentType.prototype)) { DocumentType.prototype.remove = Element.prototype.remove; }

  // event target/currentTarget normalization
  if (window.Event && !('target' in Event.prototype)) {
    try { Object.defineProperty(Event.prototype, 'target', { get: function () { return this.srcElement; } }); } catch (e) {}
  }

  function registerDialogs() {
    if (typeof window !== 'undefined' && window.dialogPolyfill) {
      var dialogs = document.querySelectorAll('dialog');
      for (var i = 0; i < dialogs.length; i++) {
        try { if (!dialogs[i].showModal) window.dialogPolyfill.registerDialog(dialogs[i]); } catch (e) {}
      }
    }
  }
  registerDialogs();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerDialogs);
  }


  // Runtime error overlay (helps debug on TV browsers without console)
  function showRuntimeError(msg) {
    try {
      var box = document.getElementById('nexa-debug-error');
      if (!box) {
        box = document.createElement('div');
        box.id = 'nexa-debug-error';
        box.style.cssText = 'position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;background:rgba(120,0,0,.92);color:#fff;font:12px/1.4 monospace;padding:8px 10px;border:1px solid #f66;border-radius:6px;max-height:40vh;overflow:auto;white-space:pre-wrap;';
        (document.body || document.documentElement).appendChild(box);
      }
      var line = document.createElement('div');
      line.textContent = String(msg);
      box.appendChild(line);
    } catch (e) {}
  }
  window.addEventListener('error', function (e) {
    var msg = (e && e.message ? e.message : 'Error') + (e && e.filename ? ' @ ' + e.filename + ':' + (e.lineno || '') : '');
    showRuntimeError(msg);
  });
  window.addEventListener('unhandledrejection', function (e) {
    var reason = e && e.reason;
    showRuntimeError('Unhandled rejection: ' + (reason && (reason.stack || reason.message) ? (reason.stack || reason.message) : String(reason)));
  });

  // Failsafe: never leave loading screen stuck if app init fails
  function hideLoader() {
    try {
      var el = document.getElementById('loading-screen');
      if (el && el.className.indexOf('hidden') === -1) {
        if (el.classList) el.classList.add('hidden'); else el.className += ' hidden';
      }
    } catch (e) {}
  }
  window.addEventListener('load', function () { setTimeout(hideLoader, 4000); });
  setTimeout(hideLoader, 6000);
})();
