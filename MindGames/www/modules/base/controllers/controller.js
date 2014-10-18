define(['angular', '../module'], function (angular) {
    angular
	.module('base')
	.controller('basecontroller', ['$scope', function ($scope) {
	    $scope.message = 'This is base controller';
	}])
	.controller('logincontroller', ['$scope', function ($scope) {
	    $scope.message = 'This is login controller';
	}])
});