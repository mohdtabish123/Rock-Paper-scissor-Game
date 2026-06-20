let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.getElementById("msg")

const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const gencompchoice = () =>{
    //rock,paper,scissor
    const options = ["rock","paper","scissor"]
    const randid = Math.floor( Math.random()*3)
    return options[randid]
}

const draw = (compchoice,userchoice) =>{
    console.log("the gme is draw")
    msg.innerText = `GAME IS DRAW! your choice ${userchoice} and also computer choice ${compchoice}` 
    msg.style.backgroundColor = "#081b31"
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++
        userscorepara.innerText = userscore
        console.log("you win")
        msg.innerText = `YOU WIN! your ${userchoice} beats ${compchoice} `
        msg.style.backgroundColor = "green"
        if(userscore == 5){
            message.classList.remove("hide")
            newbtn.classList.remove("hide")
            message.innerText = `COMPUTER HAVE SCORE ${compscore} AND YOURS ${userscore}! SO YOU WIN`
            // message1.innerText = "SCROLL DOWN TO PREVIEW"
            msg.innerText = "THIS IS THE LAST MATCH VIEW"
            msg.style.backgroundColor = "#081b31"
            // disableboxes()

        }
    }
    else{
        compscore++
        compscorepara.innerText = compscore
        console.log("you lose")
        msg.innerText = `YOU LOSE! ${compchoice} beats your ${userchoice} `
        msg.style.backgroundColor = "red"
        if(compscore == 5){
            message.classList.remove("hide")
            newbtn.classList.remove("hide")
            message.innerText = `COMPUTER HAVE SCORE ${compscore} AND YOURS ${userscore}! SO COMPUTER WIN`
            // message1.innerText = "SCROLL DOWN TO PREVIEW"
            msg.innerText = "THIS IS THE LAST MATCH VIEW"
            msg.style.backgroundColor = "#081b31"
            // disableboxes()
        }
    }
}

const playgame = (userchoice) => {
    console.log("user choice = " , userchoice)
    //generate computer choice
    const compchoice = gencompchoice()
    console.log("comp choice = ", compchoice)

    if(userchoice === compchoice){
        draw(compchoice,userchoice)
    }
    else{
        let userwin = true
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true
        }
        else {
            userwin = compchoice === "rock" ? false : true
        }
        showwinner(userwin,userchoice,compchoice)
    }
}


choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked",userchoice)
        playgame(userchoice)
    })
});

//for restart the game

const resetgame = () =>{
    userscore = 0
    compscore = 0
    userscorepara.innerText = 0
    compscorepara.innerText = 0
    message.classList.add("hide")
    newbtn.classList.add("hide")
    msg.innerText = "Play your move"
    message.innerText = ""
    enableboxes()
    // message1.innerText = ""    
}



 const disableboxes = () =>{
//     for(box of choices){   
//         box.disabled = true
//     }
}

 const enableboxes = () =>{
//     for(box of choices){
//     box.disabled = false
//     }      
       
}



let newbtn = document.querySelector(".newbtn")
let message = document.querySelector(".messages")
let message1 = document.querySelector(".messages1")
let resetbtnclass = document.querySelector(".ctn")


newbtn.addEventListener("click" , resetgame)