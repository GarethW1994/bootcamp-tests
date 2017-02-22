
//test function
describe('isFromFunction', function() {
    it("should return 'true' if the regNum is from Bellville", function() {

      var output = isFrom('CY 15897', 'CY');

      assert.equal(output, true);
    });

    it("should return 'false' if the regNum is not from Bellville", function() {
      var output = isFrom('CA 23423', 'CA');

      assert.equal(output, false);
    });
});
