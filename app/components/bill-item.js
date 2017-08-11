import Ember from 'ember';

export default Ember.Component.extend({
  bills: null,
  expanded: false,

  actions:{
    toggle(){
      this.toggle('expanded');
    }
  }

});
