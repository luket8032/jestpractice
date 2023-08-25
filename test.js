// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


const testFn = () => {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function ceaserCipher(str, shiftNum) {
        const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const shifted = str.split('');

        if(shiftNum === 0) return str

        shifted.forEach((letter, index) => {
            if(letter != ' ') {
                if(letter === 'z') {
                    shifted[index] = chars[-1 + shiftNum];
                } else {
                    shifted[index] = chars[chars.indexOf(letter) + shiftNum];
                }
            }
        })

        return shifted.join('');
    }

    return { capitalize, reverseString, ceaserCipher};
}

const me = testFn();
console.log(me.ceaserCipher('hel lz', 2))

module.exports = testFn;

