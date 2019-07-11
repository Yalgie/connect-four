# Connect Four

## Getting Started
Follow these instructions to get started with a local development build or view the live app hosted on netlify here (https://yalgie-connect-four.netlify.com/)[https://yalgie-connect-four.netlify.com/].

```
git clone https://github.com/Yalgie/connect-four.git

npm install

npm start
```

## Tech Architecture
- React v16.8
- Redux v4
- MaterialUI v4.2
- Create React App (CRA v3.1)

## Rules / Flow
- When the page loads and the application starts, users will be presented with a screen saying 'Let's Play Connect 4'.
- Users can then select which colour should go first, upon clicking Red or Yellow, the game will start.
- The active colour can then hover their mouse over the different pieces which will highlight the entire column.
- Once a user clicks on the highlighted column, a piece will be placed in the first available spot in that column. This spot is determined by looping through the 2D board array in the redux state and finiding the first available spot, it will then update the board state and then run various checks such as win and draw conditions.
- Players repeat this process untill a player wins, or if the board fills up and there are no more available moves it will end in a draw.
- Once the game ends either via a draw or a player winning, they are presented with some contexualised text around if a colour won or if it was a draw and a replay button, which resets redux to it's initial state.

## Assumptions
- Assuming no data needs to be saved or persisted throughout sessions
- Assuming we don't need to use something like socket.io to make the game multiplayer

## Improvements / Wishlist
- Socket based multiplayer game where the game can be played on users own screens
- Drag & Drop functionality where users have a pile of pieces and they can drag and drop them into the columns
- Animations of the pieces falling down the rows and having a bit of a bounce when it lands
- I don't have much experience with Unit Testing but i'd like to add tests for the win conditions given I had more time
- Improve upon the basic UX & UI
