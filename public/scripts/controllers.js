function UserListController($scope, User) {
  $scope.alerts = [];

  $scope.getUsers = function() {
    $scope.users = User.query();
  };

  $scope.add = function(newuser) {
    User.create(newuser,
      function(success) {
        $scope.alerts.push({
          text: 'User successfully updated.',
          success: true
        });
        newuser = undefined;
        $('#add-user-modal').modal('hide'); // create directive for modals
        $scope.getUsers();
      }, function(error) {
        $scope.alerts.push({
          text: 'Problem updating user.',
          success: false
        });
        console.log(error);
      }
    );
  };

  $scope.getUsers();
}

function UserDetailController($scope, $routeParams, $location, User, Messaging) {
  window.scope = $scope;

  $scope.msgQue = 'userDetail';
  $scope.user = User.get({userId: $routeParams.userId});
  $scope.alerts = [];

  $scope.update = function() {
    User.update({userId: $routeParams.userId},$scope.user, function(success) {
      Messaging.success($scope.msgQue, 'User successfully updated.');
      // $scope.addMessage('User successfully updated.','success');
    }, function(error) {
      Messaging.error($scope.msgQue, 'Problem updating user.');
      // $scope.addMessage('Problem updating user.','danger');
      // console.log(error);
    });
  };

  $scope.confirm = function() {
    // TODO: pop-up comfirm modal
    $scope.delete();
  };

  $scope.delete = function() {
    User.remove({userId: $routeParams.userId},
      function(success) {
        $location.path("/users");
      }, function(error) {
        $scope.addMessage('Problem deleting user.','danger');
        console.log(error);
      }
    );
  };

  $scope.addMessage = function(text, type) {
    Messaging.addMessage('userDetail', text, type)
    $scope.alerts.push({
      message: text,
      type: type
    });
  }
}

function NoteController($scope) {

}