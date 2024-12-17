

let isStop = true;
const sec = document.querySelector('#sec')
const min = document.querySelector('#min')
const hr = document.querySelector('#hr')
const play_btn = document.querySelector('#play-btn')
const reset_btn = document.querySelector('#reset-btn')
const play_icon = document.querySelector('#play-icon')


var secNum = 0;
var minNum = 0;
var hrNum = 0; 

function start(){
   if(isStop){
    isStop = false;   
     timer()

   }
}


function timer(){
   if(isStop==false){
     secNum++
         if(secNum<10){
            sec.innerHTML = `0${secNum}`;   
         }else{
            sec.innerHTML = secNum;   
         }
            
    if(secNum==60){
        secNum = 0;
        start()
        minNum++;
        if(minNum<10){
            min.innerHTML = `0${minNum}`;   
         }else{
            min.innerHTML = minNum;   
         }   
    }
    if(minNum==60){
        minNum = 0;
         hrNum++;
         if(hrNum<10){
            hr.innerHTML = `0${hrNum}`;   
         }else{
            hr.innerHTML = hrNum;   
         }  

       

    }

    setTimeout("timer()",1000)
   }
   

   

}


function stop(){
   
    isStop = true;

}


play_btn.addEventListener('click',()=>{
    if(isStop==true){
    document.querySelector('#play-icon').src = "stop-icon.svg"
         start()
    }else if(isStop==false){
        document.querySelector('#play-icon').src = "play-icon.svg"
         stop()
    }
})

function reset(){
    isStop = true;
     document.querySelector('#play-icon').src = "play-icon.svg"

    secNum = 0;
    minNum = 0;
    hrNum = 0; 
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hr.innerHTML = "00"
}


reset_btn.addEventListener('click',reset)



