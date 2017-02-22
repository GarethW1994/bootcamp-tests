var regCheck = function(regNum, location) {
    var checkRegLocation = regNum.includes(location);

    return checkRegLocation;
}

var isGP = regCheck('DV 23 NB GP', 'GP');
var isMP = regCheck('DV 23 LP GP', 'MP');
