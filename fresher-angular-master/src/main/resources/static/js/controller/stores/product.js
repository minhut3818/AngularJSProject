var app = angular.module('myApp');
app.controller("productInfor", function($scope, $http, $routeParams){
	$http({
		method: 'get',
		url: "http://localhost:9000/fresherangular/product/get/"+$routeParams.id
	}).success(function(data) {
		$scope.productName=data.name;
		$scope.productModel=data.model;
		$scope.productYear=data.year;
		$scope.productPrice=data.price;
		$scope.productProducer=data.producer;
		$scope.productAvailable=data.available;
		
	})
});