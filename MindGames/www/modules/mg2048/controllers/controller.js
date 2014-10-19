define(['angular', '../module'], function (angular) {
    angular
	.module('mg2048')
	.controller('mg2048controller', ['$scope', function ($scope) {
	    $scope.init = function () {
	        require([
                './mg2048/js/bind_polyfill',
	            './mg2048/js/classlist_polyfill',
	            './mg2048/js/animframe_polyfill',
	            './mg2048/js/keyboard_input_manager',
	            './mg2048/js/html_actuator',
	            './mg2048/js/grid',
	            './mg2048/js/tile',
	            './mg2048/js/local_storage_manager',
	            './mg2048/js/game_manager'
	        ], function () {
	            window.requestAnimationFrame(function () {
	                new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
	            });
	        });
	    }
	}])
	.controller('mg2048indexcontroller', ['$scope', function ($scope) {
	    $scope.init = function () {
	        var item = 20;
	    }
	}])
});