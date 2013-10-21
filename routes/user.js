var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list = function (req, res) {
   User.find(function(error, users) {
     res.send(users);
   });
};
    
exports.get = function (req, res) {
  User.findById(req.params.userId, function(error, user) {
    res.send(user);
   });
};

exports.update = function (req, res) {
  delete req.body._id;
  User.findByIdAndUpdate(req.params.userId, req.body, function(error, data) {
    if(error) {
      console.log(error);
      res.status(400).send(error);
    }
    res.status(200).send(data);
  });
};

exports.add = function (req, res) {
  new User(req.body).save(
    function (err, product) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(product);
      }
    }
  );
};

exports.delete = function (req, res) {
  User.findById(req.params.userId,
    function (err, product) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        product.remove();
        res.status(200).send(product);
      }
    }
  )
};
