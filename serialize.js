// Define your component without `Ractive.extend`
myComponent = {
  template: '<div>I have loaded asynchronously <button on-click="foo">foo!</button></div>',
  on: {
    foo: function(){
      alert('this is foo button!');
    }
  }
}

// 1. Serialize the component 
console.log("serialized component: ");
console.log(serialize(myComponent)); 
// Copy the output to the receiver

document.getElementById("output").innerHTML = serialize(myComponent);

