/* eslint-env node */
module.exports = {
  description: 'blueprintone',
  normalizeEntityName: function(){
    return "ember-rrssb";
  },

  afterInstall(options) {
    // Perform extra work here.
    return this.addBowerPackageToProject('rrssb');
   }
};
