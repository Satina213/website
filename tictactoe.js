let size = 600;
let third = size / 3;
let sixth = third / 2;
let game = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
function drawX(x, y)    {
    line(x - sixth / 2, y - sixth / 2, x + sixth / 2, y + sixth / 2);
    line(x - sixth / 2, y + sixth / 2, x + sixth / 2, y - sixth / 2);
}
function drawO(x, y)    {
    noFill();
    circle(x, y, sixth)
}
// render function renders 1 for x and 2 for o
function render(board)   {
    for (let i = 0; i < board.length; i ++)    {
        for (let j = 0; j < board[i].length; j++)  {
            let x = sixth + third * i;
            let y = sixth + third * j;
            if (board[i][j] == 1)   {   // 1 is X
                drawX(x, y);
            }
            else if (board[i][j] == 2)  {
                drawO(x, y);
            }
            // drawO(x, y);
            // circle(sixth + third * i, sixth + third * j, 25);
        }
    }
}
function inputMove(move)    {
    let num = 10 - num;
    let i = ceil(num / 3) - 1
    let j = num % 3;
    game[i][j] = 1;
    return [i, j]
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('number').onsubmit = function()  {
        let move = document.querySelector('#number').value;
        inputMove(move);
    }
});

function numAvailable(board)   {
    let emptySpaces = 0;
    for (let i = 0; i < board.length; i ++) {
        for (let j = 0; j < board[i].length; j++)   {
            if (board[i][j] == 0)   {
                emptySpaces++;
            }
        }
    }
    return emptySpaces;
}
function setup()    {
    let canvas = createCanvas(size, size);
    canvas.parent("game-window");
    // background(0);
}

function draw() {
    background(220);
    line(third, 0, third, height);
    line(third * 2, 0, third * 2, height);
    line(0, third, width, third);
    line(0, third * 2, width, third * 2);
    render(game);
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('number').onsubmit = function()  {
            let move = document.querySelector('#number').value;
            inputMove(move);
        }
    });
}