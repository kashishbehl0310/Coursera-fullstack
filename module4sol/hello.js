(function(window){
  var hello = {};
  var helloMsg = "Hello";
  hello.speak = function(name){
    console.log(helloMsg + " " + name);
  }
  window.hello = hello;
})(window);
