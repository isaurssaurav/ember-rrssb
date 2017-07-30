/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-rrssb',
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/rrssb/css/rrssb.css');
    app.import('bower_components/rrssb/js/rrssb.js');
  }
};
