/*jshint esversion: 6*/

function determineSpeedLimit(input) {
    const area = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let speed = input[0];
    let driveArea = input[1];

    let calculateSpeed = (limit, speed) => {
        if (speed <= limit) {
            console.log();
            return;
        }
        let overLimit = speed-limit;
        if (overLimit <= 20) {
            console.log('speeding');
        } else if (overLimit <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    };

    switch (driveArea) {
        case 'motorway':
            calculateSpeed(area[driveArea], speed);
            break;
        case 'interstate':
            calculateSpeed(area[driveArea], speed);
            break;
        case 'city':
            calculateSpeed(area[driveArea], speed);
            break;
        case 'residential':
            calculateSpeed(area[driveArea], speed);
            break;
        default:
            break;
    }

    // if (driveArea === 'motorway') {
    //     if (speed <= 130) {
    //         return;
    //     } else if (speed > 130 && speed <= 150) {
    //         console.log('speeding');
    //     } else if (speed > 150 && speed <= 190) {
    //         console.log('excessive speeding');
    //     } else {
    //         console.log('reckless driving');
    //     }
    // } else if (driveArea === 'interstate') {
    //     if (speed <= 90) {
    //         return;
    //     } else if (speed > 90 && speed <= 110) {
    //         console.log('speeding');
    //     } else if (speed > 110 && speed <= 130) {
    //         console.log('excessive speeding');
    //     } else {
    //         console.log('reckless driving');
    //     }
    // } else if (driveArea === 'city') {
    //     if (speed <= 50) {
    //         return;
    //     } else if (speed > 50 && speed <= 70) {
    //         console.log('speeding');
    //     } else if (speed > 70 && speed <= 90) {
    //         console.log('excessive speeding');
    //     } else {
    //         console.log('reckless driving');
    //     }
    // } else if (driveArea === 'residential') {
    //     if (speed <= 20) {
    //         return;
    //     } else if (speed > 20 && speed <= 40) {
    //         console.log('speeding');
    //     } else if (speed > 40 && speed <= 60) {
    //         console.log('excessive speeding');
    //     } else {
    //         console.log('reckless driving');
    //     }
    // }
}

determineSpeedLimit([40, 'city']);
determineSpeedLimit([21, 'residential']);
determineSpeedLimit([120, 'interstate']);
determineSpeedLimit([200, 'motorway']);