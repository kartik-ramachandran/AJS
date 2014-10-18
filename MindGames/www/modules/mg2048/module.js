define(['angular', 'ui.router'], function(angular){
var mg2048 = angular.module('mg2048', ['ui.router'])
.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
		 $urlRouterProvider
        //.otherwise('/login');
        .otherwise('/mg2048');

		$stateProvider
		    .state("mg2048.index", {
			 url: "/index",
			 templateUrl: 'modules/mg2048/views/index.htm'
			 // controller: ''
		 })
		 .state("mg2048.mg2048", {
			 url: "/mg2048",
			 templateUrl: 'modules/mg2048/views/mg2048.htm'
			 // controller: ''
		 })
    }]);
	return mg2048;
});
