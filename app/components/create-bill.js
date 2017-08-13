import Ember from 'ember';

export default Ember.Component.extend({
  create: null,

  actions:{
    create(){
      this.get('create')(this);
    }
  }
});
