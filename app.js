const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds')

// date of launch
// const dayOfLaunch = new Date().toLocaleString().slice(0, 2);

const daysToLaunch = 08;
const hoursToLaunch = 23;
const minutesToLaunch = 55;
const secondsToLaunch = 41;

// const endTime = new Date(`2021,11,${daysToLaunch},${hoursToLaunch},${minutesToLaunch},${secondsToLaunch}`);
const endTime = new Date('2021-11-07').getTime();

// time of launching
// const time = endTime - nowTime;

setInterval(() => {

    const nowTime = new Date().getTime();

    let days = Math.floor(endTime / (1000 * 60 * 60 * 24) - (nowTime / (1000 * 60 * 60 * 24)));

    days = days < 10 ? `0${days}` : days;

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((endTime / 1000 - (nowTime / 1000)) % 60);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}, 1000)