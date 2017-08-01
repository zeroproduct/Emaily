// keys.js --- figure out which credentials to return
if (process.env.NODE_ENV === 'production') {
  //production keys
  module.exports = require('./prod');
} else {
  //dev keys
  module.exports = require('./dev');
}
