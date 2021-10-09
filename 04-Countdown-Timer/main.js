const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const Diwali = "4 Nov 2021";

function countdown() {
    const newDate = new Date(Diwali);
    const currentDate = new Date();
    
    const milliSecond = (newDate - currentDate) / 1000;

    const days = Math.floor(milliSecond/3600 /24);
    const hours = Math.floor(milliSecond/3600) % 24;
    const minutes = Math.floor(milliSecond/60) % 60;
    const seconds = Math.floor(milliSecond) % 60;
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

}

function formatTime(time){
    if (time < 10){
        return `0${time}`;
    }
    else{
        return `${time}`;
    }
}

countdown();
setInterval(countdown, 1000);

 
