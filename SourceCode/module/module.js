var app =angular.module("shoppingCart", ["ngRoute"]);

app.config(['$routeProvider',function($routeProvider){

$routeProvider.

	when('/HOME',{ 
		templateUrl:'/template/home.html',
		controller: 'shopCtrl'
		
		
	}).
	when('/SHOP',{ 
		templateUrl:'/template/shop.html',
		controller: 'shopCtrl'
	}).
	when('/CART',{ 
		templateUrl:'/template/cart.html',
		controller: 'cartCtrl'
	}).

	otherwise({

		redirectTo:'/HOME'
	});

}]);







