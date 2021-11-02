// assined HTML elements of a countdown timer
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds')

// always actual year,month,day data
const actualYear = new Date().getFullYear()
const actualMonth = new Date().toLocaleDateString().slice(2, 4)
const actualDay = new Date().getDay();

const daysToLaunch = actualDay + 9;

//time of launch
const endTime = new Date(`${actualYear}-${actualMonth}-${daysToLaunch}`).getTime();

// interval function set to 1000 miliseconds (1 second) to update counter every second
setInterval(() => {
    //actual time
    const nowTime = new Date().getTime();

    // calculate days from miliseconds (1000 miliseconds in second , 60 seconds in minute, 60 minutes in hour , 24 hours in day)
    //then subtracting actual time from time of launch(end time) to get te time left
    // Math.floor method to cut decimal numbers

    let days = Math.floor(endTime / (1000 * 60 * 60 * 24) - (nowTime / (1000 * 60 * 60 * 24)));
    // when the number of days/hours/minutes/seconds is less than 10, add "0" in front
    days = days < 10 ? `0${days}` : days;

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((endTime / 1000 - (nowTime / 1000)) % 60);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // assign calculated values to the right span elements
    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}, 1000)