var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:pass#123@ds049848.mongolab.com:49848/example');
var User = mongoose.model('User', { name: String, phone: String, dept: String, loc: String }, 'User');

// create sample collection if not exists
mongoose.connection.once('open', function callback () {
  User.find(function(error, users) {
    console.log(users.length);
    if(users.length == 0) {
      new User({name: "Tony", phone: "800-555-0000", dept: "ENG", loc: "E42"}).save();
      new User({name: "Nicole",phone: "800-555-1111",dept: "BUS",loc: "B24"}).save();
      new User({name: "Mike",phone: "800-555-2222",dept: "ACC",loc: "A01"}).save();
    }
  });
});

app.use(express.static(__dirname + '/public'));
app.use(require('less-middleware')({ src: __dirname + '/public' }));

app.use(app.router);

var user = require('./routes/user');
app.get('/api/users', user.list);
app.get('/api/users/:userId', user.user);

// var note = require('./routes/note');
// app.get('/api/notes', note.list);


app.listen(3000);
console.log('Listening on port 3000');