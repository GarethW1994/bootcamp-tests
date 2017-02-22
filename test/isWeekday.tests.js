describe('isWeekdayFunction', function() {
  it("return 'true' if the current day is a week day", function(){
    var output = isWeekday(date.getDay());

    assert.equal(output, true)
  });
});
