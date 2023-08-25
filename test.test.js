const testFn = require('./test.js')

const myTest = testFn();

test('Capitalize', () => {
    expect(myTest.capitalize('hello')).toBe('Hello');
});

test('Reverse a string', () => {
    expect(myTest.reverseString('hello')).toBe('olleh');
});

test('Ceaser Cipher', () => {
    expect(myTest.ceaserCipher('hello', 1)).toBe('ifmmp');
});

