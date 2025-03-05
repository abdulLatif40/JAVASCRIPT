function math(x) {
    return Math.floor(Math.random() * x)
}
let div = document.getElementById('div');
let wins = document.getElementById('score1')
let loses = document.getElementById('score2')
let draw = document.getElementById('score3')
let myarry = ["Rock", "Paper", "Sissors"];
let rebtn = document.getElementById('btn4')
let pc
let player
let scorestrfy
let score =JSON.parse(localStorage.getItem("score"))|| {
    wins: 0,
    loses: 0,
    Draw: 0,
}


//score[0] = win score[1] = loose score[2] = draw
// console.log(myarry[math(3)]);
//done 

function game(input) {
    if (input == "Rock") {
        player = "Rock"
        console.log(player)
    }
    else if (input == "Paper") {
        player = "Paper"
        console.log(player)
    }
    else if (input == "Sissors") {
        player = "Sissors"
        console.log(player)
    }
    output()
}
// pc = myarry[math(3)];
let btns = document.getElementsByTagName('button');
console.log(btns);
function output() {
    pc = myarry[math(3)];
    if (pc === player) {

        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>Draw</h1>`
        score.Draw = ++score.Draw
        draw.innerHTML = `Draw: ${score.Draw}`

    }
    //pc rock 1
    else if (pc == "Rock" && player == "Paper") {
        // console.log("you won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>wins</h1>`
        score.wins = ++score.wins
        wins.innerHTML = `wins: ${score.wins}`

    }

    else if (pc == "Rock" && player == "Sissors") {
        console.log("i won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>loses</h1>`
        score.loses = ++score.loses
        loses.innerHTML = `Loses: ${score.loses}`

    }

    //player rock 1
    else if (player == "Rock" && pc == "Paper") {
        console.log("you won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>losses</h1>`
        score.loses = ++score.loses
        loses.innerHTML = `loses: ${score.loses}`

    }

    else if (player == "Rock" && pc == "Sissors") {
        console.log("i won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>wins</h1>`
        score.wins = ++score.wins
        wins.innerHTML = `wins: ${score.wins}`



    }
    //pc sissors 1
    else if (pc == "Sissors" && player == "Rock") {
        console.log("i won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>won</h1>`
        score.loses = ++score.loses
        loses.innerHTML = `Loses: ${score.loses}`



    }

    //player sissors 1
    else if (player == "Sissors" && pc == "Rock") {
        console.log("you won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>loses</h1>`
        score.wins = ++score.wins
        wins.innerHTML = `wins: ${score.wins}`

    }

    
    //pc paper 1
    else if (pc == "Paper" && player == "Rock") {
        console.log("i won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>loses</h1>`
        score.loses = ++score.loses
        loses.innerHTML = `Loses: ${score.loses}`


    }

    else if (pc == "Paper" && player == "Sissors") {
        console.log("you won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>won</h1>`
        score.wins = ++score.wins
        wins.innerHTML = `wins: ${score.wins}`

    }
    //player paper 1
    else if (player == "Paper" && pc == "Rock") {
        console.log("you won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>won</h1>`
        score.wins = ++score.wins
        wins.innerHTML = `wins: ${score.wins}`


    }

    else if (player == "Paper" && pc == "Sissors") {
        console.log("i won");
        div.innerHTML = `<h1>you:${player}</h1>
        <h1>pc: ${pc}</h1>
        <h1>loses</h1>`
        score.loses = ++score.loses
        loses.innerHTML = `loses: ${score.loses}`
        


    }
    
    localStorage.setItem("score", JSON.stringify(score));

}


wins.innerHTML = `wins: ${score.wins}`
loses.innerHTML = `loses: ${score.loses}`
draw.innerHTML = `Draw: ${score.Draw}`
wins.style.fontSize = "40px" 
loses.style.fontSize = "40px" 
draw.style.fontSize = "40px" 
div.style.fontSize = "40px" 


rebtn.addEventListener('click',()=>{
    localStorage.removeItem('score')
    score={
    wins: 0,
    loses: 0,
    Draw: 0,
    }
    div.innerHTML =''
    localStorage.setItem('score',JSON.stringify(score))
    wins.innerHTML = `wins: ${score.wins}`
loses.innerHTML = `loses: ${score.loses}`
draw.innerHTML = `Draw: ${score.Draw}`

})