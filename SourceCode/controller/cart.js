app.controller('cartCtrl', function($scope,FillCart){
var arraylist=[];

$scope.$watch(function() {
		
$scope.cart=FillCart.Getitems();
$scope.arraylist=$scope.cart;

});
	$scope.$watch(function() {
		
$scope.take2=FillCart.Getselecteditems();

});
	 $scope.add=function(index,name)
	 {

angular.forEach($scope.arraylist, function(value, key) {

	if(value.itemname===name)
	{
		// console.log($scope.arraylist[key].quantity);
		$scope.arraylist[key].quantity+=1;
		
		
        FillCart.Setitems($scope.arraylist);
		}
});
        
	 };
	 $scope.minus=function(index,name)
	 {
// if (num <= 1)
//  {
//             return num = 1};
angular.forEach($scope.arraylist, function(value, key) {

	if(value.itemname===name)
	{
		// console.log($scope.arraylist[key].quantity);
		$scope.arraylist[key].quantity-=1;
		$scope.arraylist[key].itemprice-=parseInt($scope.arraylist[key].price);
        FillCart.Setitems($scope.arraylist);
		}

});
        
	 }
		 
});

	