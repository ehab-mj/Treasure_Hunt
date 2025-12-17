let map_size = Number(prompt("Map size? (example: 5)"));
let start_Position = Number(prompt("start position?"));
let Move_Num = Number(prompt("how many moves?"));

let move_History = []
let treasure_Num = Math.floor(Math.random() * map_size)

function treasure() {
    while (treasure_Num === start_Position) {
        treasure_Num = Math.floor(Math.random() * map_size)
    }
}

function playerMove() {
    let diraction = prompt("Move Left or right?");
    let currentPosition = start_Position;

    if (diraction === "left") {
        currentPosition--;
    } else if (diraction === "right") {
        currentPosition++;
    } else {
        console.log("invalid diraction");
    }

    Move_Num--;
    move_History.push(diraction);

    console.log("Player position" + " " + currentPosition);
}

function startgame() {
    while (Move_Num > 0) {
        playerMove();


        if (start_Position === treasure_Num) {
            console.log("Treasure found");
        }
    }


    console.log("You Lost");
}

treasure()
startgame()


console.log("Treasure was at", treasure_Num);
console.log("Moves history:", move_History);