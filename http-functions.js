module.exports = function getHTML (options, callback) {

 var https = require('https');
  var fullData = '';
  var newOptions = {
    host: options.host,
    path: options.path
  };

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
  https.get(newOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    fullData += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    callback(fullData);
    console.log('**------Response stream complete.------**');
  });
});
}

function printHTML (html) {
  console.log(html);
}
