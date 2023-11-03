const Time=document.querySelector("#Time");
const startBtn=document.querySelector("#startBtn");
const pauseBtn=document.querySelector("#pauseBtn");
const resetBtn=document.querySelector("#resetBtn");

let startTime =0;
let elapsedTime =0;
let currentTime=0;
let pause=true;
let intervalId;
let hrs=0;
let min=0;
let sec=0;

startBtn.addEventListener("click",()=>{
    if(pause){
        pause=false;
        startTime=Date.now() - elapsedTime;
        intervalId=setInterval(updateTime,1000);
    }

})
pauseBtn.addEventListener("click",()=>{
    if(!pause){
        pause=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(intervalId);
    }
    
})
resetBtn.addEventListener("click",()=>{
    pause=true;
    clearInterval(intervalId);
     startTime =0;
    elapsedTime =0;
     currentTime=0;
    hrs=0;
    min=0;
    sec=0;
    Time.textContent="00:00:00";

    
})

function updateTime(){
    elapsedTime=Date.now()-startTime;
    sec=Math.floor((elapsedTime/1000)%60);
    min=Math.floor((elapsedTime/(1000*60))%60);
    hrs=Math.floor((elapsedTime/(1000*60*60))%60);

    sec=pad(sec);
    min=pad(min);
    hrs=pad(hrs);


    Time.textContent= `${hrs}:${min}:${sec}`;
    function pad(unit){
        return(("0")+unit).length>2?unit:"0" + unit;
    }



}

