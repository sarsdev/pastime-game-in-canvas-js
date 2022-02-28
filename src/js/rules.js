function isGameFinish() {
    if(board.space1 !== null && board.space2 !== null && board.space3 !== null) {
        if(board.space1 === board.space2 && board.space1 === board.space3) {
            return { finish: true, winner: board.space1 };
        }
    }
    if(board.space4 !== null && board.space5 !== null && board.space6 !== null) {
        if(board.space4 === board.space5 && board.space4 === board.space6) {
            return { finish: true, winner: board.space4 };
        }
    }
    if(board.space7 !== null && board.space8 !== null && board.space9 !== null) {
        if(board.space7 === board.space8 && board.space7 === board.space9) {
            return { finish: true, winner: board.space7 };
        }
    }
    if(board.space1 !== null && board.space4 !== null && board.space7 !== null) {
        if(board.space1 === board.space4 && board.space1 === board.space7) {
            return { finish: true, winner: board.space1 };
        }
    }
    if(board.space2 !== null && board.space5 !== null && board.space8 !== null) {
        if(board.space2 === board.space5 && board.space2 === board.space8) {
            return { finish: true, winner: board.space2 };
        }
    }
    if(board.space3 !== null && board.space6 !== null && board.space9 !== null) {
        if(board.space3 === board.space6 && board.space3 === board.space9) {
            return { finish: true, winner: board.space3 };
        }
    }
    if(board.space1 !== null && board.space5 !== null && board.space9 !== null) {
        if(board.space1 === board.space5 && board.space1 === board.space9) {
            return { finish: true, winner: board.space1 };
        }
    }
    if(board.space3 !== null && board.space5 !== null && board.space7 !== null) {
        if(board.space3 === board.space5 && board.space3 === board.space7) {
            return { finish: true, winner: board.space3 };
        }
    }
    if (board.space1 !== null && board.space2 !== null && board.space3 !== null &&
        board.space4 !== null && board.space5 !== null && board.space6 !== null &&
        board.space7 !== null && board.space8 !== null && board.space9 !== null) {
        return { finish: true, winner: null };
    }
    return { finish: false, winner: null };
}