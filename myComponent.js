// Define your component without `Ractive.extend`
myComponent = {
  template: '<div style="border: 1px solid black">I have loaded asynchronously <button on-click="foo">foo!</button></div>',
  on: {
    foo: function(){
      alert('this is foo button!');
    }
  }
}

// fully serialize the component in order to send over a websocket transport
myComponentSerialized = serialize(myComponent);
