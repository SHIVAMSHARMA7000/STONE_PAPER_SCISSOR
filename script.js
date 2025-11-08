let user_score = 0;
let comp_score = 0;
 const user_scorep = document.querySelector("#user-score");
 const comp_scorep = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const showwinner = (userwin,user_choice,comp_choose) => {
    if(userwin){
        user_score++;
        user_scorep.innerText = user_score;
        console.log("you win");
        msg.innerText = `you win! your choice ${user_choice} beats ${comp_choose}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        comp_scorep.innerText = comp_score;
        console.log("you lose");
        msg.innerText = `you lose! your choice ${user_choice} beaten by ${comp_choose}`;
        msg.style.backgroundColor = "red";
    }
}
const comp_choice = ()=>{
    const option = ["rock","paper","scissor"];
    const randomidx  = Math.floor(Math.random()*3);
    return option[randomidx];
}
const playgame = (user_choice)=>{
    const comp_choose = comp_choice();
    console.log(comp_choose+" "+user_choice);
 if(user_choice===comp_choose){
    drawgame();
 }
 else{
    let userwin = true;
    if(user_choice === "rock"){
        userwin = comp_choose=== "paper"?false:true;
    }
    else if(user_choice === "paper"){
        // scissor,rock
        userwin = comp_choose === "rock"?true:false;

    }
    else{
        // rock,paper
        userwin = comp_choose === "stone"?false:true;
    }
    showwinner(userwin,user_choice,comp_choose);
 }
}
const drawgame = ()=>{
    console.log("game draw");
    msg.innerText = "GAME DRAW ! TRY AGAIN";
    msg.style.backgroundColor = "#081b31"
    
    
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);


        
    })
})