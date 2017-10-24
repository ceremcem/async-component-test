httpGet('myComponent.js', function(received){
  eval(received);
  console.log("serialized component: ");
  console.log(myComponentSerialized); 
  document.getElementById("output").innerHTML = myComponentSerialized;
});
