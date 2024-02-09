function validSolution(board) {
    const size = 9;

    // Check each row
    for (const row of board) {
        const rowSet = new Set();

        for (const sym of row) {
            if (sym === 0 || rowSet.has(sym)) {
                return false;
            }
            rowSet.add(sym);
        }
    }

    // Check each column
    for (let i = 0; i < size; i++) {
        const columnSet = new Set();

        for (let k = 0; k < size; k++) {
            const sym = board[k][i];

            if (sym === 0 || columnSet.has(sym)) {
                return false;
            }
            columnSet.add(sym);
        }
    }

    // Check 3x3 boxes
    for (let i = 0; i < 9; i += 3) {

        // single boxes
        const boxSet1 = new Set();
        const boxSet2 = new Set();
        const boxSet3 = new Set();

        for (let rowI = i; rowI < i + 3; rowI++) {
            for (let columnI = 0; columnI < 3; columnI++) {
                const sym = board[rowI][columnI];
                if (sym === 0 || boxSet1.has(sym)) {
                    return false;
                }
                boxSet1.add(sym);
            }

            for (let columnI = 3; columnI < 6; columnI++) {
                const sym = board[rowI][columnI];
                if (sym === 0 || boxSet2.has(sym)) {
                    return false;
                }
                boxSet2.add(sym);
            }

            for (let columnI = 6; columnI < 9; columnI++) {
                const sym = board[rowI][columnI];
                if (sym === 0 || boxSet3.has(sym)) {
                    return false;
                }
                boxSet3.add(sym);
            }
        }
    }
    return true;
}

const board3 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

const board4 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]
  
  
console.log(validSolution(board3))
console.log(validSolution(board4))