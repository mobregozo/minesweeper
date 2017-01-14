(function() {
    'use strict';

    angular.module('minesweeper', ['ui.router', 'minesweeper.home','minesweeper.game','ui.bootstrap'])


    .config(function($stateProvider, $urlRouterProvider) {


        // setup an abstract state for the navigation panel
        $stateProvider.state('app', {
            url: '/',
            abstract: true,
            templateUrl: 'shared/navigation.html'
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });
})();