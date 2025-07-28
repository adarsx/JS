let UserScore=0;
let CompScore=0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const playerscore = document.querySelector("#player-score");
const computerscore = document.querySelector("#computer-score");

let options = ["rock","paper","scissors"];

let ps=0;
let cs=0;

const showwinner = (userwin) => {
    if (userwin) {
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        playerscore.innerText = ps+1;
        ps=ps+1;
        
        } else {
            msg.innerText = "You lose!";
            msg.style.backgroundColor = "red";
            computerscore.innerText = cs+1;
            cs=cs+1;
            }
}

const playGame = (userChoice) => {
    let random = Math.floor(Math.random()*options.length)
    let computerChoice = options[random];
    console.log("Computer chose: " + computerChoice);
    if(userChoice===computerChoice)
    {
        console.log("It's a tie!");
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "black";
    }
    else
    {
        let userwin = true;
    if(userChoice==="rock")
    {
        if(computerChoice==="scissors")
        {
            console.log("User wins");
        }
        else
        {
            console.log("Computer wins");
            userwin=false;
        }
    }
    else if(userChoice==="paper")
    {
        if(computerChoice==="rock")
        {
            console.log("User wins");
        }
        else
        {
            console.log("Computer wins");
            userwin=false;
        }
    }
    else 
    {
        if(computerChoice==="paper")
        {
            console.log("User wins");
        }
        else
        {
            console.log("Computer wins");
            userwin=false;
        }
    }
    showwinner(userwin);
}
};





choices.forEach((box) => {
     box.addEventListener("click", ()=> {
        let userChoice = box.getAttribute("id");
        console.log("User chose:",userChoice);
        playGame(userChoice);
     });
});

