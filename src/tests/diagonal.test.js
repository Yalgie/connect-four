import { checkWin } from "../store/thunkActions";

const player1WinDownRight = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
];
const player1WinDownLeft = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
];
const player2WinDownRight = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
];
const player2WinDownLeft = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
];

test('Checking diagonal down right win for player 1', () => {
    expect(checkWin(player1WinDownRight, 1)).toBeTruthy();
});

test('Checking diagonal down left win for player 1', () => {
    expect(checkWin(player1WinDownLeft, 1)).toBeTruthy();
});

test('Checking diagonal down right win for player 2', () => {
    expect(checkWin(player2WinDownRight, 2)).toBeTruthy();
});

test('Checking diagonal down left win for player 2', () => {
    expect(checkWin(player2WinDownLeft, 2)).toBeTruthy();
});
