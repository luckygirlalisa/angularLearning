nameModule.controller('policyCtrl', ['$scope', function($scope) {
	$scope.addPolicy = function(policyName) {
		if($scope.policyCount == undefined){
			$scope.policyCount = 0;
			$scope.policies = [];
		}

		if (policyName != "" && policyName != undefined) {
			$scope.policyCount += 1;
			$scope.policies.push(policyName); 
			$scope.policy = "";
		};
	}
}]);