var app = angular.module('application', ['ngRoute']);
app.controller('controller', function($rootScope,$scope,$http,$location) {
	var url="json/fundtable.json";
		$http.get(url).success(function(response) {		
		$scope.fundDetails = response.fundOverview;
		$scope.discreteDetails = response.discretePerformance;
		$scope.annualDetails = response.annualPerformance;
		});
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contact', {
        templateUrl: 'price_overview.html'        
      }).
	   when('/contact1', {
        templateUrl: 'fund_info.html'        
      }).
	   when('/contact2', {
        templateUrl: 'performance.html'        
      })
	  
  }]);


 