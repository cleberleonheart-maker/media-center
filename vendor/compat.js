(function () {
  if (!Array.prototype.flatMap) {
    Array.prototype.flatMap = function (callback, thisArg) {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        if (i in this) {
          var mapped = callback.call(thisArg, this[i], i, this);
          if (Array.isArray(mapped)) {
            for (var j = 0; j < mapped.length; j++) result.push(mapped[j]);
          } else {
            result.push(mapped);
          }
        }
      }
      return result;
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
          if (dep > 0 && Array.isArray(val)) {
            out = out.concat(flatten(val, dep - 1));
          } else {
            out.push(val);
          }
        }
        return out;
      };
      return flatten(this, d);
    };
  }
  function registerDialogs() {
    if (typeof window !== 'undefined' && window.dialogPolyfill) {
      var dialogs = document.querySelectorAll('dialog');
      for (var i = 0; i < dialogs.length; i++) {
        try {
          if (!dialogs[i].showModal) window.dialogPolyfill.registerDialog(dialogs[i]);
        } catch (e) {}
      }
    }
  }
  registerDialogs();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerDialogs);
  }
})();
