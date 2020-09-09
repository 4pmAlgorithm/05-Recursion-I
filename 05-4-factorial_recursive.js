// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(num){ //5
    if(num === 1) return 1; //basecase 

    return num * factorial(num-1); //5 * 4 * 3 * 2 = 120 

}

factorial(5)