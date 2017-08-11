export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = ''; // make this `/api`, for example, if your API is namespaced


  this.get('/bills', function () {
    return {
      data: [{
        type: 'bills',
        id: 1,
        attributes: {
          billerName: 'Verizon',
          billDate: '27',
          billAmount: '69',
          billFrequency: 'monthly',
          withdrawAccount: 'Southwest'
        }
      }, {
        type: 'bills',
        id: 2,
        attributes: {
          billerName: 'Four Seasons',
          billDate: '17',
          billAmount: '57',
          billFrequency: 'monthly',
          withdrawAccount: 'Southwest'
        }
      }, {
        type: 'bills',
        id: 3,
        attributes: {
          billerName: 'Mortgage',
          billDate: '1',
          billAmount: '57',
          billFrequency: 'monthly',
          withdrawAccount: 'Bill Pay'
        }
      }]
    };
  });
}
