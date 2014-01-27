var express = require('express');
var app = express();
var lessMiddleware = require('less-middleware');

var mongoose = require('mongoose');
// check out mongolab.com to get a free mongo instance
mongoose.connect('mongodb://admin:password@ds049848.mongolab.com:49848/example');
// mongoose.connect(process.env.MONGO_CONNECTION_URL);
var User = mongoose.model('User', { name: String, phone: String, dept: String, loc: String }, 'User');

// create sample collection if not exists
mongoose.connection.once('open', function callback () {
  User.find(function(error, users) {
    if(users.length == 0) {
      new User({name: "Tony", phone: "800-555-0000", dept: "ENG", loc: "E42"}).save();
      new User({name: "Nicole",phone: "800-555-1111",dept: "BUS",loc: "B24"}).save();
      new User({name: "Mike",phone: "800-555-2222",dept: "ACC",loc: "A01"}).save();
    }
  });
});

app.configure(function() {
  app.use(express.bodyParser());
  app.use(app.router);

  app.use(lessMiddleware({
    src: __dirname + '/public',
    compress: true
  }));
  app.use(express.static(__dirname + '/public'));
});

var user = require('./routes/user');
app.get('/api/users', user.list);
app.get('/api/users/:userId', user.get);
app.put('/api/users/:userId', user.update);
app.post('/api/users', user.add);
app.delete('/api/users/:userId', user.delete);

// var note = require('./routes/note');
// app.get('/api/notes', note.list);


app.listen(3000);
console.log('Listening on port 3000');