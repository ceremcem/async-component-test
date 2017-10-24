httpGet('app.html', function(app_html){
  httpLoad('serialize.js', function(res){
    console.log('this is received from serialize.js: ', res);
  });
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
