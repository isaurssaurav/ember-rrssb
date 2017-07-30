import Ember from 'ember';
import layout from '../templates/components/e-rrssb';

export default Ember.Component.extend({
  layout,
  facebookurl: '',
  twitterurl:'',
  init() {
    this._super(...arguments);
  },
  didInsertElement(){
    window.rrssbInit();
  }
});
