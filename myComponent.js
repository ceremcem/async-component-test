// Define your component without `Ractive.extend`
myComponent = {
  template: 'I have loaded asynchronously <button on-click="foo">foo!</button>',
  on: {
    foo: function(){
      alert('this is foo button!');
    }
  }
}

// fully serialize the component in order to send over a websocket transport
myComponentSerialized = serialize(myComponent);
