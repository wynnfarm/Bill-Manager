import Ember from 'ember';

export default Ember.Component.extend({
  create: null,
  billFreqOptions:['Monthly', 'Pay Period'],
  selectedFreq:'Choose a Frequency',
  billAccountOptions:['Bill Pay', 'SouthWest', 'General'],
  selectedWithdrawAcct:'Choose an Account',
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
      this.set('selectedWithdrawAcct', acctIn);
      this.set('withdrawAccount', this.get('selectedWithdrawAcct'));
    }

  }
});
