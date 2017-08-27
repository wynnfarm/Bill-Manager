import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Component.extend({

  bill: null,
  cancel: null,
  save: null,
  changeset: Ember.computed('bill', function() {
    return new Changeset(this.get('bill'));
  }),
  actions:{
    test(){
      debugger;
    },
    save(){
      this.get('changeset').save();
      this.get('cancel')();
    },
    cancel(){
      this.get('cancel')();
    }

  }
});
