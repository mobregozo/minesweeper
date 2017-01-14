describe('TimeConverter Service', function(){
    var Friends;
    beforeEach(module('minesweeper'));

    beforeEach(inject(function (_timeConverter_) {
        timeConverter = _timeConverter_;
    }));

    it('convert miliseconds to minutes', inject(function(timeConverter) {        
        expect(timeConverter.msToTime(60000)).toEqual("01:00");
    }));

});