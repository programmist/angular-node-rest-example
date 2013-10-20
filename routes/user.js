var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list = function (req, res) {
   User.find(function(error, users) {
     res.send(users);
   });
};
    
exports.get = function (req, res) {
  User.find({_id:req.params.userId}, function(error, users) {
    user = users.length > 0 ? users[0] : {};
    res.send(user);
   });
};

exports.update = function (req, res) {
  console.log("update: " + req.body);
  //new User(req.body).save();
  res.status(200).send(req.body);
};

exports.delete = function (req, res) {
};
