/* put js code here */
var app = angular.module('RedditApp', []);

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searchTerm = '';
	$scope.history = [];

	$scope.search = function() {
		$scope.history.push($scope.searchTerm);
		var req = {
			url: "http://www.reddit.com/search.json?q=" + $scope.searchTerm,
			method: "GET"
		}

		$http(req).then(function success(res) {
			var redditData = res.data;
			console.log(redditData);
			$scope.results = redditData.data.children;
		}, function error(res) {
			console.log(res);
		});
	}


}]);

console.log('this file is running.');