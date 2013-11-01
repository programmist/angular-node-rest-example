angular.module('myApp', []).
  directive('apAlert', function() {
    return {
      templateUrl: "views/alert.html",
      restrict: 'EA',
      replace: true,
      scope:{
        alert: '=alert',
        close: '&onClose'
      }
    };
  });

function MyController($scope, $timeout) {
  $timeout(function() {
    $scope.alerts = [
      "Good morning Dave.",
      "I love the smell of napalm in the morning.",
      "PC Load Letter"
    ];
  }, 500);
}