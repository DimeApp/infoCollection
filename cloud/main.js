
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('hello', function(req, res) {
  const email = req.params.email;
  const charity = req.params.charity;
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;
});

Parse.Cloud.define('storeEmailName', function(req, res) {
  // const email = req.params.email;
  // const firstName = req.params.firstName;
  // const lastName = req.params.lastName;

  var Person = Parse.Object.extend('Person');
  var newPerson = new Person();

  newPerson.set('email', 'jbavier123@gmail.com');
  newPerson.set('firstName', 'Justin');
  newPerson.set('lastName', 'Bavier');

  newPerson.save(null, {
    success: function(newPerson) {
      alert('Nice' + Person.id);
    },
    error: function(newPerson, error) {
      alert('Boo' + error.message);
    }
});
