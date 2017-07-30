/* eslint-env node */
module.exports = {
  description: ''
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/rrssb/css/rrssb.css');
    app.import('bower_components/rrssb/js/rrssb.js');
  },
  afterInstall(options) {
    // Perform extra work here.
    return this.addBowerPackageToProject('rrssb');
   }
};
