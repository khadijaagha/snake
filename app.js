
    /*----- constants -----*/
    let cell;
    let cells;
    let width = 20;
    let height = 20;
    let cellCount;
    let snakeDirection = -1;
    let randomFruitPosition;

    /*----- state variables -----*/
    let score = 0;
    let grid;
    let speedOfSnake = 1000; //1s
    let alive = true;
    let tail = [];
    let timer;
    let startGame = false;
    let snake = [189, 190];

    /*----- cached elements  -----*/

    let scoreDisplay = document.querySelector('.score');
    let startBtn = document.querySelector("button");



    /*----- functions -----*/


    render();

    function render() {
        renderGrid();
        addSnake();
        renderFruits();
    }


    function renderGrid() {
        // ? VARIABLES
        grid = document.querySelector(".grid");
        cellCount = width * height
        cells = []
        createGrid();
    }

        function createGrid() {
            for (let i = 0; i < cellCount; i++) {
               
                cell = document.createElement('div');
                cell.dataset.index = i;
                cell.style.height = `${100 / height}%`
                cell.style.width = `${100 / width}%`
                grid.appendChild(cell);
                cells.push(cell)

            }
        }

    function addSnake() {
        const [snakeHead, ...restOfTheSnake] = snake;
        console.log(snakeHead);
        console.log(restOfTheSnake);
        cells[snakeHead].classList.add('snake-head');
        restOfTheSnake.forEach(function (index) {
            cells[index].classList.add("square");
        })

    }

    function removeSnake() {

        const [snakeHead, ...restOfTheSnake] = snake;
        cells[snakeHead].classList.remove('snake-head');
        restOfTheSnake.forEach(function (index) {
            cells[index].classList.remove("square");
        })
    }

    function handleSnakeDirection(event) {
        event.preventDefault();
        const key = event.keyCode
        const up = 38
        const down = 40
        const left = 37
        const right = 39

   
        removeSnake();

       
        if (key === up && snakeDirection !== width) {

            snakeDirection = -width;
        } else if (key === down) {

            snakeDirection = +width
        } else if (key === left) {
            snakeDirection = -1

        } else if (key === right) {

            snakeDirection = 1

        } else {
            console.log('INVALID KEY')
        }

        addSnake();

    }


    //! make snake move constantly

    function constantMovement() {
        let currentPosition = snake[0];
        const newPosition = snake[0] + snakeDirection;
       
        if (snakeDirection === -width && newPosition < width) { 
            console.log('UP');
            gameOverMessage();
            
        } else if (snakeDirection === width && newPosition >= cellCount) {
            console.log('DOWN');
            gameOverMessage();
            
        } else if (snakeDirection === 1 && (currentPosition % width === width - 1)) {
            console.log('RIGHT');
            gameOverMessage();
            
        } else if (snakeDirection === -1 && (snake[0] % width === 0)) {
            console.log('LEFT');
            gameOverMessage();

        } else if (cells[snake[0]].classList.contains('square')) {
            gameOverMessage();
        }

        removeSnake();
        snake.pop();
        snake.unshift(snake[0] + snakeDirection);
        addSnake();
        snakeEatFruit();


    }
    const snakeMovementTimer = () => {
        timer = setInterval(() => {
            if(startGame == true)
            {
                constantMovement();
            }
        }, speedOfSnake)

    }

    snakeMovementTimer();

    /*----- event listeners -----*/
    document.addEventListener('keydown', handleSnakeDirection)

    function gameOverMessage() {
        displayText();
        clearInterval(timer);
    }

    function displayText() {
        let text = document.getElementById("textField");
        text.style.display = "block";
        text.style.fontSize = "50px";
        text.style.color = 'white';
        text.style.fontWeight = "bold";
      }

    function renderFruits() {
        randomFruitPosition = Math.floor(Math.random() * cellCount);
        cells[randomFruitPosition].classList.add('fruit');
        console.log(cells[randomFruitPosition]);
        
    }



    function snakeEatFruit() {
        console.log(snake[0]);
        if (cells[snake[0]].classList.contains('fruit')) {
            console.log("snake ate fruit");
            cells[snake[0]].classList.remove('fruit');
            score++
            speedOfSnake -= 52; 
            scoreDisplay.innerText = score;
            console.log(score);
            console.log(scoreDisplay);
            renderFruits();

            snake.push(snake.length - 1);

        }
    }

    startBtn.addEventListener("click", startGameBtn);

    function startGameBtn()
    {
        if(startGame == true)
        {
            location.reload();
        }

        startBtn.innerText = "Restart"
        startGame = true;
    }