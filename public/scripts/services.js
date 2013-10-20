'use strict';

/* Services */

angular.module('myServices', ['ngResource']).
  factory('User', function($resource) {
    return $resource('api/users/:userId', {}, {
      query: {method:'GET', params:{userId:'@userId'}, isArray:true},
      update: {method:'PUT', params: {userId: '@userId'}},
      create: {method:'POST'},
      remove: {method:'DELETE', params:{userId:'@userId'}}
    });
  });