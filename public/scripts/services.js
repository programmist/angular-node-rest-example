'use strict';

/* Services */

angular.module('myServices', ['ngResource']).
    factory('User', function($resource){
  return $resource('api/users/:userId', {}, {
    query: {method:'GET', params:{userId:''}, isArray:true}
  });
});