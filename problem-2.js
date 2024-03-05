// You are given a 2D array of integers depicting a rectangular geographical area. Each cell contains either 0 (an empty land block) or 1 (a tree).

const example1 = [
	[0, 0, 1, 1, 0, 0],
	[0, 1, 1, 1, 0, 0],
	[0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 1],
	[1, 0, 0, 1, 1, 1],
];

// A forest is a group of adjacent trees. Any two trees that are next to each other (in any of the eight directions) belong to the same forest.
// Write a function that returns the number of forests in a given array. 

function countForest(arr) {
    let count = 0;
    const rows = arr.length;
    const cols = arr[0].length;
    const checked = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

    function isChecked(i, j) {
        return i >= 0 && i < rows && j >= 0 && j < cols && arr[i][j] === 1 && !checked[i][j];
    }

    // Function using Depth-First Search algorithm recursively to count the forest
    function checkTheForstArea(i, j) {
        checked[i][j] = true;
        // Eight directions to check
        const row = [-1, -1, -1, 0, 0, 1, 1, 1];
        const col = [-1, 0, 1, -1, 1, -1, 0, 1];
        for (let k = 0; k < 8; k++) {
            if (isChecked(i + row[k], j + col[k])) {
                checkTheForstArea(i + row[k], j + col[k]);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 1 && !checked[i][j]) {
                count++;
                checkTheForstArea(i, j);
            }
        }
    }
    return count;
}

console.log(countForest(example1));