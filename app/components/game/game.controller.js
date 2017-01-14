(function() {
    'use strict';

    var controller = [
        function() {
            var vm = this;

            vm.resetForm=function(){
                vm.game = {};
            };

        }
    ];

    angular.module('minesweeper.game').controller('GameCtrl', controller);
})();
