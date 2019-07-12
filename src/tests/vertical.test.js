import { checkWin } from "../store/thunkActions";

const player1Win = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];
const player2Win = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
];

test('Checking vertical win for player 1', () => {
    expect(checkWin(player1Win, 1)).toBeTruthy();
});

test('Checking vertical win for player 2', () => {
    expect(checkWin(player2Win, 2)).toBeTruthy();
});
