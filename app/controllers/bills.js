import Ember from 'ember';

export default Ember.Controller.extend({
  bills: '',
  actions:{
    createRecord(newBill){
      this.store.createRecord('bill', {
        //   id: Math.floor((1 + Math.random()) * 0x10000)
        // .toString(16),
        billerName: newBill.billerName,
        billDate: newBill.billDate,
        billAmount: newBill.billAmount,
        billFrequency: newBill.billFrequency,
        withdrawAccount: newBill.withdrawAccount
      }).save();
    },
    deleteRecord(billIn){
      // debugger;
      billIn.destroyRecord();
      // this.store.findRecord('bill', billIn.id, { backgroundReload: false }).then(function(bill) {
      //   bill.deleteRecord();
      //   bill.get('isDeleted'); // => true
      //   bill.save();
      // });
    }
  }
});
