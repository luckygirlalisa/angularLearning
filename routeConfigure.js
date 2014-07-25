var nameModule = angular.module('name', ['ngRoute'])
nameModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/user/:userId', {
			templateUrl: 'templates/add-name.html',
			controller: 'userCtrl'
		}).
		when('/policy', {
			templateUrl: 'templates/add-policy.html',
			controller: 'policyCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);

nameModule.controller('commonCtrl', ['$scope',function($scope) {
    $scope.message = "This is a message from common";
  }
]);