describe('greetFunction()', function() {
    it("it should return 'Hi Gareth', when passed my name", function() {
      var output = greet('Gareth');

      assert.equal(output, 'Hi Gareth');
    });
});
