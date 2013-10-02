var users = [
    {id: 1, name: "Tony", phone: "214-555-1212", dept: "ENG", loc: "E42"},
    {id: 2, name: "Nicole", phone: "214-555-0000", dept: "BUS", loc: "B24"},
    {id: 3, name: "Mike", phone: "214-555-1111", dept: "ACC", loc: "A01"},
  ]
  
var userIndex = {
  1: users[0],
  2: users[1],
  3: users[2]
}

exports.list = function (req, res) {
    res.send(users);
};
    
exports.user = function (req, res) {
  user = userIndex[req.params.userId]
  if(user) {
    res.send(user);
  } else {
    res.send({});
  }
};