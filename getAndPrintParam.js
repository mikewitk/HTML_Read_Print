function getAndPrintHTML (options) {

  var fullData = '';
  //Maybe make newOptions keys as the options.host and options.path
  var newOptions = options;

  // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(newOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    fullData += data + '\n';
  });

  console.log(data + '\n');


  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

