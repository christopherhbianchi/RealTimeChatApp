var configValues = require('./config');

module.exports = {

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pass
    + '@ds231070.mlab.com:31070/realtimechatdb';
  }

}//closes exports
