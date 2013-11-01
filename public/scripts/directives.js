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
      link: function(scope, element, attrs) {
        scope.$watch('alert', function() {
          if(scope.alert) {
            $.each(element[0].className.split(" "), function( index, value ) {
              if(value.indexOf('alert-') >= 0) {
                element.removeClass(value);
              }
            });
            element.addClass("alert-"+scope.alert.type);
          }
        });
      }
    };
  });