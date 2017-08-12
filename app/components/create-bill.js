import Ember from 'ember';
import DS from 'ember-data';
export default Ember.Component.extend({
  create: null,

  actions:{
    create(){
      this.get('create')(this);
    }
  }
});
