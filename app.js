let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","purple","green"];
let level=0;
let started=false;
let h3=document.querySelector("h3");
document.addEventListener("keypress",()=>{
    if(started==false){
    console.log(`game started`);
    started=true;
    levelUp();
    }
});
document.addEventListener("click",()=>{
  if(started==false){
  console.log(`game started`);
  started=true;
  levelUp();
  }
});


function levelUp(){
    userSeq=[];
    level++;
  h3.innerText=`level ${ level}`;
  let randomidx=Math.floor(Math.random()*3);
  let randomcolor=btns[randomidx];
  gameSeq.push(randomcolor);
  let randombtn=document.querySelector(`.${randomcolor}`);
  gameFlash(randombtn);
  console.log(gameSeq);
}
function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(()=>{
 btn.classList.remove("flash");
 },100)
}
function checkans(curidx){
    if(gameSeq[curidx]===userSeq[curidx]){
      if(gameSeq.length==userSeq.length){
       setTimeout(levelUp,1000);
      }
    }else{
       h3.innerHTML=`Game over! your score is <b>${level}</b><br> press any key to restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(()=>{
         document.querySelector("body").style.backgroundColor="white";
       },100)
       
     reset();
    }
   }
function userFlash(btn){
    btn.classList.add("user");
    setTimeout(()=>{
    btn.classList.remove("user");
    },100)
   }
function btnpressed(){
 let btn=this;
 userFlash(btn);
 let usercolor=btn.getAttribute("id");
userSeq.push(usercolor);
checkans(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",btnpressed);
}
function reset(){
  setTimeout(()=>{
    started=false;
  },1000);
  userSeq=[];
  gameSeq=[];
  level=0;
}
