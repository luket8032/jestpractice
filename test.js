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
        });

        return shifted.join('');
    }

    function analyzeArray(arr) {
        let total = 0;
        arr.forEach(num => total += num);

        const minVal = Math.min(...arr);
        const maxVal = Math.max(...arr);
        const lengthVal = arr.length;

        return {
            "average": total / lengthVal,
            "min": minVal,
            "max": maxVal,
            "length": lengthVal
        }
    }

    return { capitalize, reverseString, ceaserCipher, analyzeArray };
}

const me = testFn();
console.log(me.analyzeArray([1,8,3,4,2,6]))

module.exports = testFn;

