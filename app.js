httpGet('app.html', function(app_html){
  Ractive.components.waitForIt = function(){
    return new Promise(ok => {
      httpGet('myComponent.serialized', function(received){
        ok(Ractive.extend(deserialize(received)));
      })
    });
  }

  new Ractive({
    target: 'body',
    template: app_html
  });
});
