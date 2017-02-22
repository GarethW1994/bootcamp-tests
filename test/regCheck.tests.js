describe('regCheckFunction', function() {
  it("should check if the registration is from given location, should return 'true'", function() {
    var output = regCheck('GP 12345', 'GP');

    assert.equal(output, true);
  });

  it("should return 'false' if registration is not from given location", function() {
    var output = regCheck('CA 12345', 'CY');

    assert.equal(output, false);
  });
});
