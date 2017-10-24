Ractive.components.waitForIt = function(){
  return new Promise(ok => {
    httpGet('myComponent.serialized', function(received){
      ok(Ractive.extend(deserialize(received)));
    })
  });
}

new Ractive({
  target: 'body',
  template: new Promise(ok => {httpGet('app.html', ok)})
});
