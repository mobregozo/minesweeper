(function() {
    'use strict';

    var controller = [
        function() {
            var vm = this;

            vm.saveGame = function(){
                //TODO:saveGame
                console.log('game is being saved');
            };
        }
    ];

    angular.module('minesweeper.game').controller('GameCtrl', controller);
})();
