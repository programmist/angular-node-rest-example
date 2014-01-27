'use strict';

angular.module('myDirectives', []).
  directive('cwAlert', ['Messaging', function(Messaging) {
    return {
      restrict: 'EA',
      templateUrl: "views/alert.html",
      replace: true,
      scope:{
        alert: '=',
        close: '&onClose',
        name: '@'
      },

      link: {
        pre: function(scope) {
          Messaging.newQueue(scope.name);
        },

        post: function(scope, element, attrs) {
          scope.$watch(Messaging.messages(scope.name), function() {
            scope.messages = Messaging.messages(scope.name);
            $.each(element[0].className.split(" "), function( index, value ) {
              if(value.indexOf('alert-') >= 0) {
                element.removeClass(value);
              }
            });
            element.addClass("alert-"+scope.alert.type);
          });
        }
      }

    };
  }]);