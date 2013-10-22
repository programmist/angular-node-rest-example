'use strict';

/* Services */

angular.module('myDirectives', []).
  directive('alert', function() {
    return {
      restrict: 'EA',
      templateUrl: "views/alert.html",
      replace: true,
      transclude : true,
      scope:{
        type: "@",
        close: "&"
      },
      link: function(){

      }
    };
  });