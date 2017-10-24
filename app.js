Ractive.components.waitForIt = function(){
  return new Promise(ok => {
    httpGet('myComponent.js', function(received){
      eval(received);
      console.log('my component is: ', myComponent);
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
