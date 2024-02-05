(function (root, factory) {
  root.Rx = factory();
})(window || global || this, function () {
  // TT violation
  document.body.innerHTML = 'violation' + globalThis['something'];
  return require('../dist/package/Rx');
});