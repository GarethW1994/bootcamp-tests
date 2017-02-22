describe('findItemsOver20()', function() {
            it('should return an object with items over 20', function() {
                    var listOne = findItemsOver20(itemList, 20);

                    assert.deepEqual(listOne, [{
                                Item: {
                                    name: 'pears',
                                    price: 37
                                }
                            },
                            {
                                Item: {
                                    name: 'bananas',
                                    price: 27
                                }
                            }
                        ]);
                    });
            });
