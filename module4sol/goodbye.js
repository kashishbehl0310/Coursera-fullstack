(function(window){
  var bye = {};
  var byemsg = "Good Bye";
  bye.speak = function(name){
    console.log(byemsg + " " + name);
  }
  window.bye = bye;
})(window);
