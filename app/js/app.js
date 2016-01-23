(function() {
  var targetNodes = document.querySelectorAll('.octicon-primitive-dot');

  var observer = new MutationObserver(function(mutations, self) {
    alert('CI finished!');
  });

  for(var i = 0; i < targetNodes.length; i++) {
    observer.observe(targetNodes[i], { childList: true, subtree: true });
  };

}).call(this);
