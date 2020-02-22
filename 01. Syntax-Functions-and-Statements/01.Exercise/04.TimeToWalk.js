/*jshint esversion: 6*/

function timeToWalk(steps, footLength, speed) {
    let numberOfSteps = steps;
    let stepByMeters = footLength;
    let speedMetersPerSecond = speed / 3.6;
    let length = numberOfSteps * stepByMeters;

    let totalSeconds = length / speedMetersPerSecond;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = (totalSeconds - (hours * 3600) - (minutes * 60)).toFixed(0);

    let additionalMinutes = Math.floor(length / 500);

    if (additionalMinutes > 59) {
        let addHours = Math.floor(additionalMinutes / 60);
        let leftMinutes = additionalMinutes - addHours * 60;
        minutes += leftMinutes;
        hours += addHours;
    } else {
        minutes += additionalMinutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(100000, 1, 5);