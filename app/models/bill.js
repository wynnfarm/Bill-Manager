import DS from 'ember-data';

export default DS.Model.extend({

  billerName: DS.attr(),
  billDate: DS.attr(),
  billAmount: DS.attr(),
  billFrequency: DS.attr(),
  withdrawAccount: DS.attr()

});
