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

    return { capitalize, reverseString}
}


module.exports = testFn;

