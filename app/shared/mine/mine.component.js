(function() {
    'use strict';

    MineController.$inject = ['$scope', 'CONS_VALUES', '$timeout', 'timeConverter'];

    function MineController($scope, CONS_VALUES, $timeout, timeConverter) {


        // Injecting $scope just for comparison
        var vm = this;

        // rowSize, colSize, mineAmount
        vm.const = CONS_VALUES;

        vm.mineChart = {
            rows: []
        };

        vm.game = { started: false ,fieldUsed:0};
        vm.game.finished = false;

        vm.clickField = function(field) {
            field.used = true;
            if (field.content==CONS_VALUES.bomb){
                vm.game.finished =true;
                chronoStop();
                alert('Sorry, you just lose the game, Please try again!');
                return;
            }
            vm.game.fieldUsed = vm.game.fieldUsed+1;
            if (vm.game.fieldUsed == (vm.rowSize * vm.colSize) - vm.mineAmount && !vm.game.finished){
                vm.game.finished =true;
                chronoStop();
                alert('We have a Winner');
            }
        };


        vm.cancelGame = function() {
            chronoStop();
            vm.game = { started: false,fieldUsed:0 };
            vm.mineChart = {
                rows: []
            };
        };

        vm.saveGame = function() {
            //TODO: Save the Game 
        };

        function generateNumbersField(minefield) {
            for (var y = 0; y < vm.rowSize; y++) {
                for (var x = 0; x < vm.colSize; x++) {
                    calculateNumberForField(x, y);
                }
            }
        }

        vm.createNewGame = function() {
            vm.mineChart = {};
            vm.mineChart.rows = [];            
            vm.game = { started: true,fieldUsed:0 };
            //Create Structure
            for (var i = 0; i < vm.rowSize; i++) {
                var newRow = {};
                newRow.fields = [];

                //Iterate over all the rows
                for (var j = 0; j < vm.colSize; j++) {
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
            var row = Math.round(Math.random() * (vm.rowSize - 1));
            var column = Math.round(Math.random() * (vm.colSize - 1));

            //Add the mine to the sctrucure
            vm.mineChart.rows[row].fields[column].content = CONS_VALUES.bomb;
        }

        function addAllMines() {
            for (var i = 0; i < vm.mineAmount; i++) {
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

        

        //CHRONO fn

        var timer = null;
        vm.start = 0;
        vm.end = 0;
        vm.diff = 0;

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
            rowSize: '=',
            colSize: '=',
            mineAmount: '='
        }
    });
})();
