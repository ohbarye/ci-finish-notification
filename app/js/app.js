(function() {
  var targetNodes = document.querySelectorAll('.octicon-primitive-dot');

  var observer = new MutationObserver(function(mutations, self) {
    alert('CI finished!')
  });

  targetNodes.forEach(function(node) {
    observer.observe(node, { childList: true, subtree: true });
  });

}).call(this);
