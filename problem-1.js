// array of all characters that occur in all strings.
function getCommonChars(arr) {
    return arr.reduce((acc, str) => {
        const chars = str.split('');
        return acc.filter(val => {
            const index = chars.indexOf(val);
            if (index > -1) {
                console.log('index', index, val, chars, acc)
                chars.splice(index, 1);
                return true;
            }
            return false;
        });
    }, arr[0].split(''));
}

const result = getCommonChars(["hello world",
    "this is a test",
    "this is an example"]); 

console.log(result);
console.time()