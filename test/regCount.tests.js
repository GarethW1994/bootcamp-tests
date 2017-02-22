describe('regCount', function(){

    it('should count regNumber and return 3', function() {
      var output = countRegNumber('CA 1234, CY 1235, CL 8526');
      assert.equal(output, 3);
    });

    it('should count regNumbers and return 6', function() {
      var output = countRegNumber('CL 1234, CY 2345, CA 1234, LM 1234 GP, CEO 1234, CF 9773');
      assert.equal(output, 6);
    });
});
