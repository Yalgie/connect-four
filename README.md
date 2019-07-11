# Connect Four

## Rules / Flow
- When the page loads and the application starts, users will be presented with a modal saying 'Let's Play Connect 4' and a button saying 'Start'.
- Once the 'Start' button is clicked, it will trigger an action to randomise who should go first between player 1 or 2. This initial 'turn' is then stored in the global redux state.
- The active player can then hover their mouse over the different rows which will highlight.
- Once a user clicks on the highlighted row, a piece will be placed in the first available spot in that row. This spot is determined by looping through the 2D board array in the redux state and finiding the first available spot, it will then update the state and in turn the board will re render.
- Players repeat this process untill a player wins, or if the board fills up and there is no winner it will end in a draw.
- Once the game ends either via a draw or a player winning, they are presented with another model with contextualised text and a 'Reset' button which will reset redux's initial state.

## Assumptions
- Assuming it's okay to randomise the players initial turn
- Assuming no data needs to be saved or persisted throughout sessions
- Assuming we don't need to use something like socket.io to make the game multiplayer

## Notes
- ...

## Improvements / Wishlist
- Socket based multiplayer game where the game can be played on users own screens
- Drag & Drop functionality for the pieces
- Animations of the pieces falling down the rows and having a bit of a bounce when it lands

## Initial Psuedo Code
Using a 2D array to visualise the board and understand how the functionality should work.

```
//7 x 6 grid
const board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

// 0 = Empty
// 1 = Player 1
// 2 = Player 2

board.set(x, y, playerIdx);
board.set(0, 5, 1);
board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];
```