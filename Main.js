const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const date = "1 Jan 2023";

function odliczanie() {
    const newYearsDate = new Date(date);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = format(hours);
    minutesElement.innerHTML = format(minutes);
    secondsElement.innerHTML = format(seconds);
}
function format(time) {
    return time < 10 ? `0${time}` : time;
}
odliczanie();
setInterval(odliczanie, 1000);