
var myClass = document.getElementsByClassName('owl-item');
var fourth = document.getElementById('I4');

function indexInClass(node) {
    var collection = document.getElementsByClassName(node.className);
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] === node)
        return i;
    }
    return -1;
  }
  
alert("The ID is: " + collection[indexInClass(I4)]);