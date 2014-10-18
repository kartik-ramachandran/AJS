define(['angular', '../module'], function (angular) {
    angular
	.module('mg2048')
	.controller('mg2048controller', ['$scope', function ($scope) {
	    $scope.init = function () {
	        require([
                './js/bind_polyfill',
	            './js/classlist_polyfill',
	            './js/animframe_polyfill',
	            './js/keyboard_input_manager',
	            './js/html_actuator',
	            './js/grid',
	            './js/tile',
	            './js/local_storage_manager',
	            './js/game_manager',
	            './js/application'], function () { });
	    }
	}])
	.controller('mg2048indexcontroller', ['$scope', function ($scope) {
	    $scope.init = function () {
	        var item = 20;
	    }
	}])
});