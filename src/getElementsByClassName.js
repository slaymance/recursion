// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsByClassName = [];

  var pushNodes = function(node) {
    var $nodeClassList = node.classList;
    var $nodeChildren = node.childNodes;

    if ($nodeClassList !== undefined && $nodeClassList.contains(className)) {
      elementsByClassName.push(node);
    }

    for (var i = 0; i < $nodeChildren.length; i++) {
      pushNodes($nodeChildren[i]);
    }
  };

  pushNodes(document.body);
  return elementsByClassName;
};