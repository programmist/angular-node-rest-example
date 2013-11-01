angular.module('myApp', []).
  directive('apAlert', function() {
    return {
      templateUrl: "views/alert.html",
      restrict: 'EA',
      replace: true,
      scope:{
        alert: '=alert',
        close: '&onClose'
      },
      link: function(scope, element, attrs) {
        scope.$watch('alert', function() {
          if(scope.alert) {
            element.removeClass();
            element.addClass("alert alert-"+scope.alert.type);
          }
        });
      }
    };
  });

function MyController($scope, $timeout) {
  $timeout(function() {
    $scope.alerts = [
      {message: "Good morning Dave.", type: "success"},
      {message: "I love the smell of napalm in the morning.", type: "info"},
      {message: "PC Load Letter", type: "danger"}
    ];
  }, 500);
}