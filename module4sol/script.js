(function(){
  var name = ["Yaakov", "Kashish", "John", "Jane", "Arpit"];
  for(var i = 0; i < name.length; i++){
    var firstLetter = name[i].charAt(0).toLowerCase();
    if(firstLetter === 'j'){
      bye.speak(name[i]);
    }
    else{
      hello.speak(name[i]);
    }
  }
})();
