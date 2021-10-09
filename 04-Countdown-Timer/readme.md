![Screenshot of Countdown Timer](screenshot.png)

Website Link - https://yokesh-ks.github.io/JavaScript_Projects/04-Countdown-Timer/

TO get Element
```
const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');
```

Diwali = new Date("4 Nov 2021");

Current Date = new Date();

## to calculate Time
```
const milliSecond = (newDate - currentDate) / 1000;
const days = Math.floor(milliSecond/3600 /24);
const hours = Math.floor(milliSecond/3600) % 24;
const minutes = Math.floor(milliSecond/60) % 60;
const seconds = Math.floor(milliSecond) % 60;
```

## To change InnerHTML
```
daysE1.innerHTML = days;
hoursE1.innerHTML = formatTime(hours);
minutesE1.innerHTML = formatTime(minutes);
secondsE1.innerHTML = formatTime(seconds);
```

## Format the time
if time value is less than 10 display "0"+"time"
```
function formatTime(time){
    if (time < 10){
        return `0${time}`;
    }
    else{
        return `${time}`;
    }
}
```

## setInterval()
The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

```
countdown();
setInterval(countdown, 1000);
```

