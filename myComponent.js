myComponent = {
  template: 'I have loaded asynchronously <button on-click="foo">foo!</button>',
  on: {
    foo: function(){
      alert('this is foo button!');
    }
  }
}
