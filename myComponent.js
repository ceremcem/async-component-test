// Define your component without `Ractive.extend`
myComponent = {
  template: '<div>I have loaded asynchronously <button on-click="foo">foo!</button></div>',
  on: {
    foo: function(){
      alert('this is foo button!');
    }
  }
}
