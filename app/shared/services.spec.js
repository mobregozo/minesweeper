describe('TimeConverter Service', function(){
    var Friends;
    beforeEach(module('minesweeper'));

    beforeEach(inject(function (_timeConverter_) {
        timeConverter = _timeConverter_;
    }));

    it('can get an instance of my service timeConverter', inject(function(timeConverter) {
        expect(timeConverter).toBeDefined();
    }));

    it('local date converter', inject(function(timeConverter) {
        var date = new Date("2015-05-12T01:01:00.000Z")
        expect(timeConverter.convertDateToIso("2015-05-12","01:01:00")).toEqual(date);
    }));

    it('convert miliseconds to minutes', inject(function(timeConverter) {        
        expect(timeConverter.msToTime(60000)).toEqual("01:00");
    }));

});