# A version of Mastermind in React

Watch the code deployed on [GitHub Pages](https://tobiasengberg.github.io/mastermind/).

## Game function

Four slots holding a colored pin are kept secret from the user. Out of six possible colors, the user is expected to divine the right combination. After each try, the user receives feedback on how successful the trial was. For each correct color in the right slot, a black dot is given as feedback. For any additional correct color, a white dot is given as feedback. A white dot thus indicates that if this color was placed in another slot, a black dot would be given as feedback. When four black dots are given as feedback, the user wins the game. 

## Reflection

The game illustrates well the principle of testing for knowledge, because the value of each trial could be measured in the amount of new information it provides the user with. So while the user tries to submit the right combination and submitting a trial with no correct colors at all could then be seen as the worst try, in terms of information given it has high value. 

## Responsiveness

The game only works on a computer, because the means of user control depend on keyboard input. 
