(function() {
    'use strict';

    var config = [
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.home', {
                url: 'home',
                views: {
                    'content': {
                        templateUrl: 'components/home/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
        }
    ];

    angular.module('minesweeper.home', []).config(config);
})();