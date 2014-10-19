define(['angular', 'ui.router'], function (angular) {
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
           .otherwise('/mg2048/menu');

            $stateProvider
            .state("mg2048", {
                abstract: true,
                url: "/mg2048",
                template: '<div ui-view></div>'
                //templateUrl: 'modules/mg2048/views/index.htm'
                // controller: ''
            })
            .state("mg2048.menu", {
                url: "/menu",
                templateUrl: 'modules/mg2048/views/menu.htm'
                // controller: ''
            })
             .state("mg2048.play", {
                 url: "/play",
                 templateUrl: 'modules/mg2048/views/mg2048.htm'
                 // controller: ''
             })
            .state("mg2048.howtoplay", {
                url: "/howtoplay",
                templateUrl: 'modules/mg2048/views/howtoplay.htm'
                // controller: ''
            })
            .state("mg2048.about", {
                url: "/about",
                templateUrl: 'modules/mg2048/views/about.htm'
                // controller: ''
            })
        }]);
    return mg2048;
});
