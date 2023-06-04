// Code your solution in this file!

// define headquarters
const hq = 42;

// function for distance from hq in blocks
function distanceFromHqInBlocks(location) {
        return Math.abs(location - hq);
    };

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

// function for distance from hq in feet

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
};

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

// function for distance between two points in feet

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
};

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

// function for calculating fare price

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination);
    if (x <= 400) {
        return 0
    }
    else if (x <= 2000) {
        return (x - 400) * .02
    }
    else if (x <=2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
};

console.log(calculatesFarePrice(42, 43));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
