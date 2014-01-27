'use strict';

/* Services */

function Messaging() {
  this.messageQueues = {};

  this.TYPES = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'danger'
  };
}

Messaging.prototype.newQueue = function(queueName) {
  if (!this.messageQueues[queueName]) {
    this.messageQueues[queueName] = [];
  }
};

Messaging.prototype.deleteQueue = function(queueName) {
  delete this.messageQueues[queueName];
};

Messaging.prototype.addMessage = function(queueName, msg, type) {
  var queue = this.messageQueues[queueName];
  if (queue) {
    queue.push({message: msg, type: type});
  }
};

Messaging.prototype.messages = function(queueName) {
  var queue = this.messageQueues[queueName];
  var msgs = [];
  if (queue) {
    msgs = queue;
  }
  return msgs;
};

Messaging.prototype.success = function(queueName, msg) {
  this.addMessage(queueName, msg, this.TYPES.SUCCESS);
};

Messaging.prototype.info = function(queueName, msg) {
  this.addMessage(queueName, msg, this.TYPES.INFO);
}

Messaging.prototype.warning = function(queueName, msg) {
  this.addMessage(queueName, msg, this.TYPES.WARNING);
}

Messaging.prototype.error = function(queueName, msg) {
  this.addMessage(queueName, msg, this.TYPES.ERROR);
}

Messaging.prototype.clear = function(queueName) {
  var queue = this.messageQueues[queueName];
  if (queue) {
    queue.length = 0;
  }
}

Messaging.prototype.clearAll = function() {
  for (var queueName in this.messageQueues) {
    this.clear(queueName);
  }
}

angular.module('myServices', ['ngResource']).
  factory('User', function($resource) {
    return $resource('api/users/:userId', {}, {
      query: {method:'GET', params:{userId:'@userId'}, isArray:true},
      update: {method:'PUT', params: {userId: '@userId'}},
      create: {method:'POST'},
      remove: {method:'DELETE', params:{userId:'@userId'}}
    });
  }).

  factory('Messaging', function() {
    return new Messaging();
  });
