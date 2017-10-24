httpGet('myComponent.js', function(myComponent){
  // 1. Serialize the component 
  console.log("serialized component: ");
  console.log(serialize(myComponent)); 
  document.getElementById("output").innerHTML = serialize(myComponent);
}
