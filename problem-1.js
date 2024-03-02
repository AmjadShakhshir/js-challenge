// array of all characters that occur in all strings.
function getCommonChars(arr) {
    newArr = [];
    arr.map((str) => {
        str.split('').map((char) => {
            if (arr.every((s) => s.includes(char))) {
                newArr.push(char);
            }
        });
    });
    return newArr;
}

const result = getCommonChars(["hello world",
    "this is a test",
    "this is an example"]); 