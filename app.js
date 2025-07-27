let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
//Game Started 
//Step One
document.addEventListener("keypress" ,function(){
    if(started==false){
    console.log("Game Started");
    started=true;
levelUp();
    }

});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
//Random Button Flash S:02
function levelUp(){
userSeq=[];
level++;
h2.innerText = `Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(` .${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);
gameSeq.push(randColor)
console.log(gameSeq);
gameFlash(randbtn);

}
function checkAns(idx){

if(userSeq[idx]==gameSeq[idx]){
if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,1000);
}
}
else{
    h2.innerHTML=`Game over !Your Score was <b>${level}</b> Press any Key To restart.`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
},150)
    reset();
}
}

//Step Three
function btnPress(){
let btn=this;
userFlash(btn);
    // console.log(this);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}