import { checkDraw } from "../store/thunkActions";

const draw = [
    [2, 2, 1, 2, 1, 2, 1],
    [2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1],
    [1, 2, 1, 1, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 2],
    [1, 1, 1, 2, 1, 2, 1],
];

test('Checking draw', () => {
    expect(checkDraw(draw)).toBeFalsy();
});
