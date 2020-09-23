const display = document.querySelector('#display');

const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const start = document.querySelector('#start');

var cronoSec;

var minutesNow;
var secondsNow;

var interval;

    for(let i = 0; i <= 60; i++){
        minutes.innerHTML += '<option value="'+i+'">'+i+'</option>'; 
    }

    for(let j = 0; j <= 60; j++){
        seconds.innerHTML += '<option value="'+j+'">'+j+'</option>';
    }

    start.addEventListener('click', () => {
        minutesNow = minutes.value;
        secondsNow = seconds.value;

        if(minutesNow < 10 && secondsNow < 10){
            display.childNodes[1].innerHTML = "0" + minutesNow + "min:" + "0" + secondsNow + "s";
        }else{
            display.childNodes[1].innerHTML = minutesNow + "min:" + secondsNow + "s";
        }

        interval = setInterval(()=> {
            secondsNow--;
            
            if(secondsNow <= 0){
                if(minutesNow > 0){
                    minutesNow--;
                    secondsNow = 59;
                }else{
                    document.querySelector('#sound').play();
                    alert("Acabou!");
                    clearInterval(interval);
                }
            }
            if(minutesNow < 10 && secondsNow < 10){
                display.childNodes[1].innerHTML = "0" + minutesNow + "min:" + "0" + secondsNow + "s";
            }else{
                display.childNodes[1].innerHTML = minutesNow + "min:" + secondsNow +"s";
            }
        }, 1000);
    })