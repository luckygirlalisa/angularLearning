nameModule.controller('userCtrl', ['$scope', function($scope) {
	$scope.addName = function() {
		if ($scope.nameCount == undefined) {
			$scope.nameCount = 0;
		};
		$scope.nameCount += 1;
		$scope.name = "";
	};
}]);