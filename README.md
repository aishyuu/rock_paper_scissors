This is a rock paper scissors game that was programmed in javascript

To look at this game you have to open in the console! (Press f12 on load to see results)

*Note: I don't know if this is too overengineered but I really tried to make a program where I broke down the problem bit by bit and tried to understand what I had to do before writing any code!*

Notes can be found below for my thought process for this problem!

1. Computer randomly chooses what option
	a. Get random number
	b. a list of 'rock', 'paper' 'scissors' gets indexed by the random number
	c. returns the choice

2. Validating user input (while loop)
	a. ask the user for a choice ('rock', 'paper', 'scissors') [make sure it's lower no matter what]
	b. if the input isn't one of them, tell the user and keep it going
	c. if it is, return the input (lowercase of course)

3. playRound
	a. Get the computer decision
	b. Get your decision
	c. check who wins (switch statement with if statements)

4. playGame
	a. Declare computer and player score
	b. Loop over playround 5 times
	c. Depending on what's returned, we add the scores accordingly
	d. at the end of the loop we check who had the higher score and declare a winner (also tie but it's rare).