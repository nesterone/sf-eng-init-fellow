function requests(type){
 req = new XMLHttpRequest();
 req.open('GET', 'http://eloquentjavascript.net/author', false);
 req.setRequestHeader('accept', type);
 req.send(null);
return req.responseText;}

var formats = ['text/plain', 'text/html', 'application/json', 'application/rainbows+unicorns'];

for (var i = 0; i <= formats.length; i++)
  console.log('Format: ', formats[i], "\n", requests(formats[i]), "\n");