import Ember from 'ember';

export default Ember.Component.extend({
  // model: null,
  // changeset: null,
  expanded: false,
  viewable: true,
  cancel: null,
  save: null,
  actions:{

    toggle(){
      this.toggle('expanded');
    },
    edit(){
      return this.set('viewable', false);
    },
    delete(bill){
      bill.deleteRecord();
      bill.save();
    },
    cancel(){
      return this.set('viewable', true);
    },
    // save(changeset){
    //   this.get('save')(changeset);
    // },
    test(){
      debugger;
    }
  }
});
