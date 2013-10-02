var express = require('express');
var app = express();
var user = require('./routes/user');
var note = require('./routes/note');

app.use(express.static(__dirname + '/public'));
app.use(require('less-middleware')({ src: __dirname + '/public' }));

app.use(app.router);
app.get('/api/users', user.list);
app.get('/api/users/:userId', user.user);
app.get('/api/notes', note.list);


app.listen(3000);
console.log('Listening on port 3000');