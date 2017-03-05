var app = angular.module('myApp');
app.controller("productList", function($scope, $http){
	
	$scope.addTotal = function(index){
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/increase/"+index
		}).success(function(data, status, headers, config){
			getData();
		})
		.error(function(data, status, headers, config){
			alert("Error");
		});
	}
	$scope.minusTotal = function(index){
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/decrease/"+index
		}).success(function(data, status, headers, config){
			getData();
		})
		.error(function(data, status, headers, config){
			alert("Error");
		});
	}
	$scope.AddProduct = function(){
		$scope.product = {
			name:$scope.name, 
			model:$scope.model, 
			year:$scope.year, 
			price:$scope.price,
			producer:$scope.producer, 
			available:$scope.available
		};
			$http.post("http://localhost:9000/fresherangular/product/add",$scope.product)
			.success(function(data, status, headers, config){
				getData();
			})
			.error(function(data, status, headers, config){});
		
	}
	$scope.orderByMe = function(x){
		$scope.myOrderBy = x;
	}
	$scope.productInfor = function(index){
		$scope.productInforID= index;
	}
	
	$scope.remove = function(x){
		$scope.products.forEach(function(item, ind){
			if(item.index == x){
					$scope.products.splice(ind,1);
			}
		});
		//$scope.products.pull($scope.products[x]);
	}
	function getProduct(){
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/get/1"
		}).success(function(data) {
			getData();
			$scope.products = data;
		  })
		  }
	function getData() { 
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/list"
		}).success(function(data, status, headers, config){
			$scope.products = data;
		})
		.error(function(data, status, headers, config){});
	}
	getData();
	
	
})