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

  // scroll behavior/position shims
  if (typeof window.scrollY === 'undefined' && typeof window.pageYOffset !== 'undefined') {
    try { Object.defineProperty(window, 'scrollY', { get: function () { return window.pageYOffset; } }); } catch (e) {}
  }
  if (typeof window.scrollX === 'undefined' && typeof window.pageXOffset !== 'undefined') {
    try { Object.defineProperty(window, 'scrollX', { get: function () { return window.pageXOffset; } }); } catch (e) {}
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
