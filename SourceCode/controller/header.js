app.controller('headerCtrl', function($scope,FillCart){

	$scope.$watch(function() {
		
$scope.take2=FillCart.Getselecteditems();
});

	//$scope.take2  = myservice.send();
	

	//console.log("inside vpnhome "+ $scope.take2);
	//window.onload();

});