import Ember from 'ember';

export default Ember.Component.extend({
  bills: null,
  expanded: false,
  viewable: true,
  delete: null,

  actions:{
    toggle(){
      this.toggle('expanded');
    },
    edit(){
      return this.set('viewable', false);
    },
    cancel(){
      return this.set('viewable', true);
    },
    save(){
      return this.set('viewable', true);
    },
    delete(bill){
      this.get('delete')(bill);
    }
  }

});
