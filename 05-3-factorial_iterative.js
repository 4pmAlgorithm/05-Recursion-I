// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(num){ //3
    let total = 1;
    for(let i = num; i > 1; i--){ //3 //2
        total *= i //1 * 3 * 2
    }
    return total; //6
}

