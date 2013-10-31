'use strict';

angular.module('myDirectives', []).
  directive('cwAlert', function() {
    return {
      restrict: 'EA',
      templateUrl: "views/alert.html",
      replace: true,
      scope:{
        alert: '=alert',
        close: '&onClose'
      },
      link: function(){
        scope.$watch('alert', function() {
          if(scope.alert) {
            element.removeClass();
            element.addClass("alert alert-"+scope.alert.type);
          }
        });
      }
    };
  });