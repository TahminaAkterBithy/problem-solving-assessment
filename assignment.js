function cubeNumber(number) {
    if (typeof number === 'number') {
        return number ** 3;
    } else {
        return "Only numbers are accepted as input";
    }
}

// console.log(cubeNumber(3)); 
// console.log(cubeNumber(4)); 
// console.log(cubeNumber('B')); 


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Only strings are accepted as input";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

// console.log(matchFinder("John Doe", "ohn")); 
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));
// console.log(matchFinder("John Doe", 123));


function sortMaker(arr) {
    if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
        return arr.sort((a, b) => a - b);
    } else if (arr[0] === arr[1]) {
        return "equal";
    } else {
        return "Invalid Input";
    }
}

// console.log(sortMaker([2, 3]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([4, 4]));
// console.log(sortMaker([1, 2]));
// console.log(sortMaker([4, -2]));


function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return `${street},${house},${society}`;
}

// console.log(findAddress({street: 10, house: "15A", society: "Earth Perfect"})); 
// console.log(findAddress({street: 10, society: "Earth Perfect"})); 
// console.log(findAddress({street: 10})); 


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Retail money does not exist";
    }

    const totalChange = changeArray.reduce((sum, val) => sum + val, 0);
    
    return totalChange >= totalDue;
}

// console.log(canPay([1, 2, 5], 10));
// console.log(canPay([1, 5, 5], 10));
// console.log(canPay([], 10));


