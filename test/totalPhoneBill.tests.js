describe('totalPhoneBill()', function(){
  it("should return 'R7.45'", function() {
    var bill = totalPhoneBill('call,sms,call,sms,sms');

    assert.equal(bill, 'R' + 7.45);
  });
});
