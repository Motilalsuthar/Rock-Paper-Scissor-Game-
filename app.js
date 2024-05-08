let user=0;
let com=0;

const result=document.querySelector(".rdisplay")

const userscore=document.querySelector("#user-score");
const comscore=document.querySelector("#com-score");
const userch=document.querySelector("#user-ch");
const comch=document.querySelector("#com-ch");

const computerChoice=()=>{
    const options =["Rock", "Paper", "Scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}


const drawgame=()=>{
    console.log("match draww");
    result.innerText = "Match Draw Play Again";
    result.style.backgroundColor="#34568B";   

}

const showwinner=(uwin)=>{
    if(uwin){
        user++;
        userscore.innerText=user
        console.log("You win!");
        result.innerText = "You win this Round";
        result.style.backgroundColor="green";

    } else {
        com++;
        comscore.innerText=com;
        console.log("You lose!");
        result.innerText = "Computer win this Round";
        result.style.backgroundColor="Red";


    }
}

const playGame=(userchoice) =>{
    console.log(userchoice);
    const comChoice = computerChoice()
    comch.innerText=comChoice

    console.log(comChoice)

    if(userchoice=== comChoice){
        drawgame();
    } else {
        let uwin=true;
        if(userchoice==="Rock"){
            uwin=comChoice==="Paper" ? false : true;

        } else if(userchoice==="Paper"){
            uwin=comChoice==="Scissors" ? false : true;

        } else{
            uwin=comChoice==="Rock" ? false : true;
        }
        showwinner(uwin,userchoice,comChoice);
    }
} 

const choice=document.querySelectorAll(".img");
choice.forEach((element) => {
    console.log(element)
    element.addEventListener("click",()=> {
        const userchoice=element.getAttribute("id");
        userch.innerText=userchoice
        // console.log(userchoiceId)
        // console.log("choice was click")
        playGame(userchoice)
    })
});



