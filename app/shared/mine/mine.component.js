(function() {
    'use strict';

    MineController.$inject = ['$scope', 'CONS_VALUES', '$timeout', 'timeConverter', '$uibModal'];

    function MineController($scope, CONS_VALUES, $timeout, timeConverter, $uibModal) {


        // Injecting $scope just for comparison
        var vm = this;

        // rowSize, colSize, mineAmount
        vm.const = CONS_VALUES;

        vm.mineChart = {
            rows: []
        };

        //CHRONO fn

        var timer = null;
        vm.start = 0;
        vm.end = 0;
        vm.diff = 0;
        vm.chrono = null;

        vm.game = { started: false, fieldUsed: 0, rowSize: 0, colSize: 0, mineAmount: 0 };
        vm.game.finished = false;


        vm.openModalMsg = function(message, className) {
            $uibModal.open({
                template: '<div class="modal-msg"><div class="text-' + className + '">' + message + '</div></div>',
            });
        };

        vm.clickField = function(field) {
            field.used = true;
            if (field.content == CONS_VALUES.bomb) {
                vm.game.finished = true;
                chronoStop();
                vm.openModalMsg('Sorry, you just lose the game, Please try again!', 'danger');
                return;
            }
            vm.game.fieldUsed = vm.game.fieldUsed + 1;
            if (vm.game.fieldUsed == (vm.game.rowSize * vm.game.colSize) - vm.game.mineAmount && !vm.game.finished) {
                vm.game.finished = true;
                chronoStop();
                vm.openModalMsg('We have a Winner', 'sucess');
            }
        };

        function cancelCurrentGame() {
            chronoStop();
            vm.game.started = false;
            vm.game.fieldUsed = 0;
            vm.mineChart = {
                rows: []
            };
            var timer = null;
            vm.start = 0;
            vm.end = 0;
            vm.diff = 0;
            vm.chrono = null;
        }


        vm.cancelGame = function() {
            cancelCurrentGame();
        };

        vm.saveGame = function() {
            vm.saveGameCallback();
        };

        function generateNumbersField(minefield) {
            for (var y = 0; y < vm.game.rowSize; y++) {
                for (var x = 0; x < vm.game.colSize; x++) {
                    calculateNumberForField(y, x);
                }
            }
        }

        vm.createNewGame = function() {
            cancelCurrentGame();
            vm.game.finished = false;
            vm.mineChart = {};
            vm.mineChart.rows = [];
            vm.game.started = true;
            vm.game.fieldUsed = 0;
            //Create Structure
            for (var i = 0; i < vm.game.rowSize; i++) {
                var newRow = {};
                newRow.fields = [];

                //Iterate over all the rows
                for (var w = 0; w < vm.game.colSize; w++) {
                    var newField = {};
                    newField.used = false;
                    newField.number = false;
                    newField.content = CONS_VALUES.empty;
                    newRow.fields.push(newField);
                }
                vm.mineChart.rows.push(newRow);
            }
            addAllMines();
            generateNumbersField();
            chronoStart();
        };

        function addMine() {
            var row = Math.round(Math.random() * (vm.game.rowSize - 1));
            var column = Math.round(Math.random() * (vm.game.colSize - 1));

            //Add the mine to the sctrucure
            vm.mineChart.rows[row].fields[column].content = CONS_VALUES.bomb;
        }

        function addAllMines() {
            for (var i = 0; i < vm.game.mineAmount; i++) {
                addMine();
            }
        }


        function calculateNumberForField(row, column) {
            // First check if it is a bomb
            if (vm.mineChart.rows[row].fields[column].content == CONS_VALUES.bomb) {
                return;
            }
            var mineCount = 0;

            var neighbors = [
                { x: -1, y: -1 },
                { x: -1, y: 1 },
                { x: 1, y: -1 },
                { x: 1, y: 1 },
            ];

            for (var n = 0; n < neighbors.length; n++) {
                //Check fr borders
                if (vm.mineChart.rows[row - neighbors[n].x] && vm.mineChart.rows[row - neighbors[n].x].fields[column - neighbors[n].y]) {
                    if (vm.mineChart.rows[row - neighbors[n].x].fields[column - neighbors[n].y].content == CONS_VALUES.bomb) {
                        mineCount++;
                        alert(mineCount);
                    }

                }
            }

            if (mineCount > 0) {
                alert(mineCount);
                vm.mineChart.rows[row].fields[column].content = mineCount;
                vm.mineChart.rows[row].fields[column].number = true;
            }
        }



        function chrono() {
            vm.end = new Date();
            vm.diff = vm.end.getTime() - vm.start.getTime();
            vm.chrono = timeConverter.msToTime(vm.diff);
            timer = $timeout(function() {
                chrono();
            }, 10);
        }

        function chronoStart() {
            vm.start = new Date();
            chrono();
        }

        function chronoContinue() {
            vm.start = new Date() - vm.diff;
            vm.start = new Date(vm.start);
            chrono();
        }

        function chronoReset() {
            vm.chrono = timeConverter.msToTime(0);
            vm.start = new Date();
        }

        function chronoStop() {
            $timeout.cancel(timer);
        }
    }


    angular.module('minesweeper').component('mineComponent', {
        templateUrl: 'shared/mine/mine.html',
        controller: MineController,
        controllerAs: 'vm',
        bindings: {
            saveGameCallback: '&'
        }
    });
})();
