function UserListController($scope, User) {
  window.scope = $scope;
  $scope.users = User.query();
}

function UserDetailController($scope, $routeParams, User) {
  window.scope = $scope;
  $scope.user = User.get({userId: $routeParams.userId});
  
  $scope.update = function() {
    User.update({userId: $routeParams.userId},$scope.user);
  };

  $scope.confirm = function() {
    User.update({userId: $routeParams.userId},$scope.user);
  };

  $scope.delete = function() {
    User.update({userId: $routeParams.userId},$scope.user);
  };
}

function NoteController($scope) {

}