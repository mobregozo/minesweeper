(function() {

    'use strict';

    describe('Controller: GameCtrl', function() {

        // load the controller's module
        beforeEach(module('minesweeper'));

        var GameCtrl, myScope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            myScope = $rootScope.$new();
            GameCtrl = $controller('GameCtrl', {
                $scope: myScope
            });
        }));

        it('should Controller injected', function() {
            expect(GameCtrl).toBeDefined();
        });

        it('should attach a list of awesomeThings to the scope', function() {
            expect(GameCtrl.saveGame).toBeDefined();
        });
    });

})();
