function convertToRoman(num) {
    const lookup = {
        M:  1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        IX: 9,
        V:  5,
        IV: 4,
        I:  1,
    };

    let solution = '';
    for (const key in lookup) {
        solution += key.repeat(Math.floor(num /lookup[key]));
        num %= lookup[key];
    }
    
    return solution;
}

convertToRoman(36);