// test/styleMock.js

// Return a Proxy to emulate css modules (if you are using them)

var idObj = require('identity-obj-proxy');
module.exports = idObj;
// test/fileMock.js

// Return an empty string or other mock path to emulate the url that
// Webpack provides via the file-loader
module.exports = '';
