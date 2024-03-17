let initial=`<div></div>`;
let bubble='';
let hitVal;
let score=0;
let clickedVal=``;
let time=10;
let ii;
let life=4;
let bubbleHolder=document.getElementById('bubbleHolder')
function createBubbles(){
    bubble='';
    for(i=0;i<=111;i++){
        bubble+=`<div class="bubble">${randomNumberGenerate()}</div>`
    }
    bubbleHolder.innerHTML=bubble;
}
function lifeVal(){
    document.getElementById('lifeVal').innerText=life
}
function randomNumberGenerate(){
    return Math.floor(Math.random()*10)
}
function hitValGenerator(){
    hitVal=randomNumberGenerate();
    document.getElementById('hitVal').innerText=hitVal;
}
function scorer(){
    score=score+10;
    document.getElementById('scoreVal').innerText=score;
}
function clickeer(){
    document.getElementById('bubbleHolder').addEventListener('click',function volo(e) {
        clickedVal=Number(e.target.innerText);
        
        if(clickedVal===hitVal){
            scorer()
            createBubbles()
            hitValGenerator()
            clearInterval(ii)
            timer()
        }
        else{
            life=life-1;
            document.getElementById('lifeVal').innerText=life;
            createBubbles()
            hitValGenerator()
            clearInterval(ii)
            timer()
        }
        if(life==0){
            bubbleHolder.innerHTML=`<span><h1>Game Over</h1> <h1>Score : ${score}</h1> <h1>Reload To Play Again </h1>.</span>` 
        }
        if(score==100 ||score==200||score==300||score==400 ){
            life=life*life
            document.getElementById('lifeVal').innerText=life;
        }
        
    })
}
function timer(){
    if(score>100){
        time=7;
    }
    else{
        time=10
    }
    ii=setInterval(()=>{
        if(time>0){
        time=time-1;
        document.getElementById('timeVal').innerText=time;
        }else{
            bubbleHolder.innerHTML=`<span><h1>Game Over</h1> <h1>Score : ${score}</h1></span>`
        }
    },1000)
}
function startGame(){
createBubbles()
hitValGenerator()
clickeer()
timer()
lifeVal()
}
