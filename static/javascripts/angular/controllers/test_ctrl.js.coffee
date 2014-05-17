App = angular.module('PortalH8', [])
App.controller 'TestController', ['$scope', ($scope) ->
  $scope.message = "Angular Rocks!"
]