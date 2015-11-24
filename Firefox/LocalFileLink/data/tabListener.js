/**
 * Registers a live listener
 * @param eventType
 * @param elementQuerySelector
 * @param cb
 */
function live (eventType, elementQuerySelector, cb) {
  document.addEventListener(eventType, function (event) {

    var qs = document.querySelectorAll(elementQuerySelector);

    if (qs) {
      var el = event.target, index = -1;
      while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
        el = el.parentElement;
      }

      if (index > -1) {
        cb.call(el, el, event);
      }
    }
  });
}

/**
 * When the user clicks a link starting with file:// we will allow it to open
 */
live('click', 'a[href^="file://"]', function(element, event) {
  self.port.emit('click', element.getAttribute('href'))
});
