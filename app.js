/*----- constants -----*/


/*----- state variables -----*/
let score;
let grid;
let speedOfSnake;
let snake = [188,189];

/*----- cached elements  -----*/


let startBtn = document.querySelector("button");


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init(){

   
//create grid



//intialise the score = 0

//key controls - arrowup/left/right/down

//estabilsh the snake (starting position, speed)

//if snake touches edges of board or itself 

//random fruit generator



}


render();

function render(){
    renderScore();
    renderSnake();
    renderFruits();
    renderGrid();
}

function renderGrid(){
    // ? VARIABLES
    const grid = document.querySelector(".grid");
  // BOARD CONFIG
  const width = 20
  const height = 10
  const cellCount = width * height
  let cells = []
    
    function createGrid(){
        for (let i = 0; i < cellCount; i++){
        // Create div cell
        const cell = document.createElement('div');
        // Add index to div element
        cell.innerText = i;
        // Add index as an attribute
        cell.dataset.index = i;
        // Add the height & width to each grid cell (div)
        cell.style.height = `${100 / height}%`
        cell.style.width = `${100 / width}%`
        console.log(grid);
        // Add cell to grid
        grid.appendChild(cell);
        // Add newly created div cell to cells array
        cells.push(cell)
        
      }
      
    }
    createGrid();
    
}

function addSnake(position){
    const startingPosition = 0
    let currentPosition = startingPosition
    console.log('SNAKE BEING ADDED TO THE FOLLOWING CELL ->', position)
    //get snake to move straight ahead at default speed
    
  
}
function handleMovement () {
    //controls for the snake (arrow up/left/down/right)
    //if snake touches the edges of the grid or itself, 
    //variabes to store the keycode and using if..else if.
}

function renderScore (){
//when snake eats fruit -> score+=1
//

}



function renderFruits (){
    //mathfloor.random etc. to generate randoom pngs of fruits on the grid
    //when snake comes in contact with the fruit - remove 'fruit' class from the particular cell (do i include this here or with renderSnake?)\
    // as a result, snake tail gets longer by a cell .
    
}

function gameOverMessage (){
    let message = document.createElement("p");
    message.innerText = "Game Over!"
    //for if the player accidentally touches the edges or itself, it should pop up with a message "Game Over!"
}

//! challenge - increasing speed everytime ?