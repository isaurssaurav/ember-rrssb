import Ember from 'ember';
import layout from '../templates/components/e-rrssb';

export default Ember.Component.extend({
  layout,
  shareUrl:'',
  emailSubject:'',

  email:false,
  facebook:false,
  tumblr:false,
  linkedin:false,
  xing:false,
  twitter:false,
  reddit:false,
  vk:false,
  googleplus:false,
  pocket:false,
  pinterest:false,

  init() {
    this._super(...arguments);
    if(this.get('shareUrl') === ''){
      this.set('shareUrl',window.location.href);
    }
  },
  didInsertElement(){
    window.rrssbInit();
  }
});
