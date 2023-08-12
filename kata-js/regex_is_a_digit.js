function assertEquals(string) {
    if (string.match(/^[0-9]/) && string < 10) {
        console.log('True')
        return true;        
    }
    console.log('false')
    return false;
};

// which should return true if given object is a digit (0-9), false otherwise.

assertEquals('')//.digit(), false);
assertEquals('7')//.digit(), true);
assertEquals(' ')//.digit(), false);
assertEquals('a')//.digit(), false);
assertEquals('a5')//.digit(), false);
assertEquals('  1 4')//.digit(), false);