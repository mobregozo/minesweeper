(function() {
    'use strict';

    var config = [
        '$stateProvider',
        function($stateProvider) {
            $stateProvider.state('app.game', {
                url: 'game',
                views: {
                    'content': {
                        templateUrl: 'components/game/game.html',
                        controller: 'GameCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
        }
    ];

    angular.module('minesweeper.game', []).config(config);
})();