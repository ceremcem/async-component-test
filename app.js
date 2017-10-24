Ractive.components.waitForIt = function(){
  return new Promise(ok => {
    httpGet('myComponent.serialized', function(received){
      ok(Ractive.extend(deserialize(received)));
    })
  });
}

httpGet('app.html', function(app_html){
  new Ractive({
    target: 'body',
    template: app_html
  });
});
