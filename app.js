Ractive.components.waitForIt = function(){
  return new Promise(ok => {
    httpGet('myComponent.js', function(received){
      eval(received);
      ok(Ractive.extend(myComponent));
    })
  });
}

httpGet('app.html', function(app_html){
  new Ractive({
    target: 'body',
    template: app_html
  });
});
