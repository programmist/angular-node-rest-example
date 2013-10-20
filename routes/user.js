var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list = function (req, res) {
   User.find(function(error, users) {
     res.send(users);
   });
};
    
exports.user = function (req, res) {
  User.find({_id:req.params.userId}, function(error, user) {
    if(user) {
      res.send(user[0]);
    }
   });
};