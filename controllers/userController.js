nameModule.controller('userCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.addName = function() {
		if ($scope.nameCount == undefined) {
			$scope.nameCount = 0;
		};
		$scope.nameCount += 1;
		$scope.name = "";
	};

	$scope.userId = $routeParams.userId;
}]);