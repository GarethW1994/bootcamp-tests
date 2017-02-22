describe('findItemsOver()', function() {
    it("should return a list of items over 30", function() {
        var outputList = findItemsOver(itemList, 30);

        assert.deepEqual(outputList, [{
            Item: {
                name: 'pears',
                price: 37
            }
        }]);
    });

    it("should return a list items over 100", function() {
        var outputList = findItemsOver(itemList2, 100);

        assert.deepEqual(outputList, [{
            Item: {
                name: 'jeans',
                price: 299.99
            }
        }, {
            Item: {
                name: 'jacket',
                price: 499.99
            }
        }]);
    });
});
