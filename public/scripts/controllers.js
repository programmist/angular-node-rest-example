function UserListController($scope, User) {
  $scope.getUsers = function() {
    $scope.users = User.query();
  };

  $scope.add = function(newuser) {
    User.create(newuser,
      function(success) {
        $scope.message = {
          text: 'User successfully updated.',
          success: true
        };
        newuser = undefined;
        $('#add-user-modal').modal('hide'); // create directive for modals
        $scope.getUsers();
      },function(error) {
        $scope.message = {
          text: 'Problem updating user.',
          success: false
        };
        console.log(error);
      }
    );
  };

  $scope.getUsers();
}

function UserDetailController($scope, $routeParams, $location, User) {
  $scope.user = User.get({userId: $routeParams.userId});

  $scope.update = function() {
    User.update({userId: $routeParams.userId},$scope.user,
      function(success) {
        $scope.message = {
          text: 'User successfully updated.',
          success: true
        }
    },function(error) {
        $scope.message = {
          text: 'Problem updating user.',
          success: false
        };
      console.log(error);
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
      },function(error) {
        $scope.message = {
          text: 'Problem deleting user.',
          success: false
        };
        console.log(error);
      }
    );
  };
}

function NoteController($scope) {

}