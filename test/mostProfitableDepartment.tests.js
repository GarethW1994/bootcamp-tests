describe('mostProfitableDepartment()', function() {
  it("should return '42525 : outdoor'", function() {
    var department = mostProfitableDepartment(salesData);

    assert.equal(department, '42525 : outdoor');
  });
});
