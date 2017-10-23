function init(){
  Ractive.components.waitForIt = function(){
    return new Promise(ok => {
      setTimeout(() => {
        received = "eyJ0ZW1wbGF0ZSI6IkkgaGF2ZSBsb2FkZWQgYXN5bmNocm9ub3VzbHkgPGJ1dHRvbiBvbi1jbGljaz1cImZvb1wiPmZvbyE8L2J1dHRvbj4iLCJvbiI6eyJmb28iOiJmdW5jdGlvbiAoKXtcblx0XHRcdGFsZXJ0KCd0aGlzIGlzIGZvbyBidXR0b24hJyk7XG5cdFx0fSJ9fQ"
        ok(deserialize(received));
      }, 1000);
    });
  }

  new Ractive({
    target: 'body',
    template: `
      <waitForIt>
        {{#partial async-loading}}Loading async component...{{/partial}}
      </waitForIt>
    `
  });
}
