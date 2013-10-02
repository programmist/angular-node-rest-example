function UserListController($scope, User) {
  window.scope = $scope;
  $scope.users = User.query();
}

function UserDetailController($scope, $routeParams, User) {
  window.scope = $scope;
  $scope.user = User.get({userId: $routeParams.userId});
}

function NoteController($scope) {

}