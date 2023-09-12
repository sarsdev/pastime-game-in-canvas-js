function isGameFinish() {
    if(board.checkCombinations(board.space1, board.space2, board.space3)) {
        return { finish: true, winner: board.space1 };
    }
    if(board.checkCombinations(board.space4, board.space5, board.space6)) {
        return { finish: true, winner: board.space4 };
    }
    if(board.checkCombinations(board.space7, board.space8, board.space9)) {
        return { finish: true, winner: board.space7 };
    }
    if(board.checkCombinations(board.space1, board.space4, board.space7)) {
        return { finish: true, winner: board.space1 };
    }
    if(board.checkCombinations(board.space2, board.space5, board.space8)) {
        return { finish: true, winner: board.space2 };
    }
    if(board.checkCombinations(board.space3, board.space6, board.space9)) {
        return { finish: true, winner: board.space3 };
    }
    if(board.checkCombinations(board.space1, board.space5, board.space9)) {
        return { finish: true, winner: board.space1 };
    }
    if(board.checkCombinations(board.space3, board.space5, board.space7)) {
        return { finish: true, winner: board.space3 };
    }
    if(board.noMatches()) {
        return { finish: true, winner: null };
    }
    return { finish: false, winner: null };
}