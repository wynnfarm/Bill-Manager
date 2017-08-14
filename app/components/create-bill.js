import Ember from 'ember';

export default Ember.Component.extend({
  create: null,
  billFreqOptions:['Monthly', 'Pay Period'],
  selectedFreq:'Monthly',
  billAccountOptions:['Bill Pay', 'SouthWest', 'General'],
  currentlySelected:'Bill Pay',
  actions:{
    create(){
      // this.set('billFrequency', this.get('selectedFreq'));
      this.get('create')(this);
    },
    selFreq(freqIn){
      this.set('selectedFreq', freqIn);
      this.set('billFrequency', this.get('selectedFreq'));
    },
    selectedAccount(acctIn){
      this.set('selectedAccount', acctIn);
      this.set('withdrawAccount', this.get('currentlySelected'));
    }

  }
});
