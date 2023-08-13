# snake

Description

This is project 1 in week 3 of the software engineering immersive at General Assembly. After learning the fundamentals of JavaScript, this project allowed me to apply the skills I learnt. Out of a range of options, I chose to create the first 1997 established game, Snake.  


Deployment link:

https://khadijaagha.github.io/snake/



Getting Started/Code Installation

Just click on the deployment link. It should lead you to the game, press the ‘Start’ button and use your keys to play !


Timeframe & Working Team

This was an individual project to be completed in a week. 

Technologies Used

HTML, CSS & JavaScript



Brief

Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board. Each item of food the snake eats the longer it grows. The game is over if the snake hits the edge of the board, or itself. To make things even more challenging, the snake increases speed as the longer it gets!
The aim of the game is to stay alive as long as possible.
## Requirements
* The snake should be able to eat food to grow bigger
* The game should end when the snake hits the wall or itself
* Snake speeds up as it eats more
## Suggested enhancements
* Responsive design
* Multi-player mode
* High score table
## Challenges
While not immediately obvious, the logic required to make the game work is relatively straightforward. Some of the enhancements are a little challenging, in particular making the game mobile-friendly.
## Tips
* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on



Planning

I started with a wireframe to roughly visualise what I wanted my game to look like. I used Figma as suggested by my instructors to produce this image. I went for a simple look, I did not focus on the CSS too much as this project was more concerned with the functionality (JavaScript) of the game.

<img width="1055" alt="Screenshot 2023-08-13 at 15 55 24" src="https://github.com/khadijaagha/snake/assets/130927994/c9c1b12e-d971-4e4f-8c23-76e223694843">





Pseudocode:

/*----- constants -----*/
Height board
Width of board

/*----- state variables -----*/
Board;
Direction of snake
Speed of snake
Score 


/*----- cached elements  -----*/
Start button
Score text display

/*----- event listeners -----*/
Start/restart button
‘keydown’


/*----- functions -----*/

Create grid 
for loop, forEach
Maintain constant movement of snake 
If , if else…  
Keep score track
Add snake:
classList.add
Remove snake 
classList.remove
Timer for snake movement: 
setInterval 
Game Over message
Render fruits on grid:
math.random to generate fruit at random cells



Rough Timeline for me to follow:

Day 1:
Creating game grid and movement of the snake. 

Day 2:
Movement of the snake contd.

Day 3:
Game Over functionality if the snake touches either side of the grid or itself.

Day 4:
Game Over functionality contd.

Day 5:
CSS styling 


GIve or take a day in case of errors and code that takes longer to figure out.




Build/Code Process


I started off with having a render function, that upon reload will trigger the rendering of the game board, the snake, and the fruits as shown below, and is initiated right in the beginning so it is called to be rendered every time a new game starts:


<img width="440" alt="Screenshot 2023-08-13 at 16 05 22" src="https://github.com/khadijaagha/snake/assets/130927994/69c16598-abe9-4f85-b6aa-f6e2f53e8681">






Snake Movement + Game Over Function:

<img width="839" alt="Screenshot 2023-08-13 at 16 05 46" src="https://github.com/khadijaagha/snake/assets/130927994/a51d6bcd-a45f-4d53-950d-07d1cf1d7e0c">


let currentPosition = snake[0];: Initialises a variable currentPosition to store the current position of the head of the snake.

const newPosition = snake[0] + snakeDirection;: Calculates the new position of the snake's head based on the current position (snake[0]) and the direction of movement (snakeDirection).

The next series of if and else if statements check if the snake is colliding with the game boundaries or itself. Depending on the direction of movement and the current position, the function determines if the snake should collide with the top, bottom, right, or left boundaries of the game canvas. If any collision is detected, the function calls gameOverMessage()
snake.pop();: This removes the last element (tail) of the snake array, effectively simulating the snake's movement.

snake.unshift(snake[0] + snakeDirection);: This adds a new element to the beginning of the snake array, representing the new position of the snake's head after the movement. 

addSnake();: This is a function that adds the updated snake to its new position on the game canvas.


Snake getting longer as it eats Function:

<img width="735" alt="Screenshot 2023-08-13 at 16 06 05" src="https://github.com/khadijaagha/snake/assets/130927994/725c32fc-8333-4f0b-8d7d-b00a94f73c68">


The snakeEatFruit() function detects when the snake's head is on a cell containing a fruit. If that happens, it updates the score, removes the fruit from the cell, increases the snake's length, and renders new fruits on the game canvas. Additionally, it likely adjusts the speed of the snake to increase the game's difficulty as the player progresses.

if (cells[snake[0]].classList.contains('fruit')) { ... }: This checks if the cell where the snake's head is located contains the class 'fruit'. 

If the condition in the if statement is true (i.e., the snake's head is on a cell with the 'fruit' class), the following actions are performed:

Cells[snake[0]].classList.remove('fruit');: This removes the 'fruit' class from the cell where the snake's head is located, effectively making the fruit disappear from the game canvas.
score++: This increments the score by 1, indicating that the player has scored a point by eating the fruit.
speedOfSnake -= 60;: This decreases the speed of the snake by reducing a time interval that controls how frequently the constantMovement() function is called. Lowering the interval makes the snake move faster.
scoreDisplay.innerText = score;: This updates the score display on the game canvas to reflect the updated score.
renderFruits();: This function is responsible for placing new fruits on the game canvas after the snake eats one.
 snake.push(snake.length - 1);: This adds an additional element (cell) to the end of the snake array, effectively increasing the length of the snake. It simulates the snake growing longer after eating a fruit.




Challenges


The whole project was a challenge for me in the sense, this was my first coding project testing newly learnt skills to an independent project which was definitely quite intimidating for me but along the way a lot of my understanding of the fundamentals improved through thorough researching on the internet. 

Some things I particularly struggled with was establishing the snake’s speed and increasing it every time. I didn't understand how to conceptualise this into code so I ended up doing a lot of research on what different ways there were. I decided to establish a speedOfSnake variable set to 700 and use the setInterval( ) method: 

<img width="788" alt="Screenshot 2023-08-13 at 16 06 42" src="https://github.com/khadijaagha/snake/assets/130927994/3702e24b-639f-4287-97bc-d13bbba6d192">


I experimented with the value of the speedOfSnake variable and it wouldn't allow for enough rounds to be played before the snake speed would be too fast and not progress anymore so I ended up deciding with 700.

Then every time the snake eats a fruit, the speed of the snake is reduced by 60 (line 192), again I experimented with this value till I decided it was appropriate.

<img width="1237" alt="Screenshot 2023-08-13 at 16 07 05" src="https://github.com/khadijaagha/snake/assets/130927994/c4c56b83-ad8d-45a3-88fa-b8975f80998d">


Wins

Experiencing the smooth movement of the snake on the grid brought immense satisfaction to the development process. Witnessing it come to life, even if it took some time to execute, was truly rewarding. However, the real sense of achievement came when the game over function flawlessly detected collisions with the grid borders or the snake's own body. It marked a significant milestone, bringing me one step closer to creating a fully functional game. This progress fueled my motivation and excitement to further enhance and fine-tune the game, making it even more engaging and enjoyable for players.

Additionally, throughout the development of this game I was consolidating my learning, so my research skills were thoroughly developed, as well as this, understanding the fundamentals such as manipulation of arrays and using functions in general got me more comfortable and confident in my skills.

Throughout the development of this game, I found myself continually consolidating and expanding my learning. This process not only honed my programming skills but also significantly improved my research abilities. Understanding the fundamentals, such as manipulating arrays and using functions, instilled a greater sense of comfort and confidence in my coding capabilities. With each challenge I faced and conquered, I grew more adept at problem-solving and gained valuable experience in developing interactive applications. This project has been an invaluable learning journey, motivating me to embrace future coding challenges with enthusiasm and determination


Key Learnings/Takeaways

Better understanding of local scope vs. global scope:	
Throughout the project, I deepened my comprehension of local and global scope in JavaScript. I now appreciate the significance of keeping variables localised within functions (local scope) to prevent unintended side effects and maintain code clarity. On the other hand, I recognize the usefulness of global scope for variables needed across multiple functions or throughout the entire program. This understanding has helped me write cleaner and more organised code, ensuring that variables are appropriately scoped to enhance code readability and prevent potential conflicts.
Functions in general - Crucial foundation for advanced topics such as using Node.js/express:
Gaining a strong grasp of functions during the project was invaluable, as they serve as the building blocks of JavaScript applications. I now realise the pivotal role functions play in code modularity and reusability, making it easier to manage complex projects. Understanding functions is particularly essential as I progress to more advanced topics like using Node.js and Express for server-side development. By mastering functions, I have equipped myself with a powerful tool to structure code logically, promote efficient debugging, and enhance the overall maintainability of my projects.
Array destructuring - Simplifying array manipulation:
My experience with array destructuring was an eye-opener in terms of simplifying array manipulation tasks. I learned how to elegantly extract values from arrays and assign them to variables, streamlining my code and making it more expressive. This technique proved valuable in scenarios where I needed to access specific elements from an array or handle multiple return values from functions efficiently. Embracing array destructuring has not only improved the readability of my code but also enhanced my understanding of JavaScript's powerful capabilities when working with complex data structures.
These key learnings have not only enriched my current project but also laid a solid foundation for future advancements in my coding journey. With a deeper understanding of local and global scope, a strong grasp of functions, and proficiency in array destructuring, I am now better equipped to tackle more challenging projects and explore advanced concepts with confidence and enthusiasm.


Bugs

The snake tail glitches occasionally, the last cell of the snake’s tail splits from the snake and appears at the opposite side of the grid.
Snake speed isn’t as smooth as desired.

Some ways to go around these bugs include; using the Modulo operator (%), to implement looping through the grid cells as that's not what I have used, so that is something I would look into.

Additionally, Thoroughly testing my game to identify specific scenarios where the tail glitch occurs. Use console.log statements to log relevant variables and positions to the console to help understand the behaviour and pinpoint any bugs



Future Improvements

Snake speed can be more cohesive and fluid.
UI/CSS - the game over message could be formatted more aesthetically as well as the score tracker + font as it is a bit crowded.
Sound effects for when snake eats fruit and when it is game over
Instead of coloured cells as fruit, I would like to add real fruit png

