import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  init() {
      this._super(...arguments);
      // debugger;
      // let model = this.get('model');
      // // // let validator = this.get(this, 'validate');
      // this.changeset = new Changeset(model);
    },
  // changeset: Ember.computed('model', function() {
  //   return new Changeset(this.get('model'));
  // }),
  bills: Ember.computed('model',function(){
    return this.get('model');
  }),
  isDirty() {
    return this.get('changeset.isDirty');
  },

  actions:{
    createRecord(newBill){
      this.store.createRecord('bill', {
        id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16),
        billerName: newBill.billerName,
        billDate: newBill.billDate,
        billAmount: newBill.billAmount,
        billFrequency: newBill.billFrequency,
        withdrawAccount: newBill.withdrawAccount
      }).save();
    },
    // save(changeset){
    //   changeset.save();
    // }
  }
});
