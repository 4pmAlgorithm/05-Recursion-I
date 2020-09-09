//call stack

//Base Case: 
//when to stop the recursive code

//Different Input: 
//change input and send it to the recursive function

//factorial 4!
// 2! 2 * 1
// 3! 3 * 2 * 1
// 4! 4 * 3 * 2 * 1

// pure recursion tips
// use helpfer function and have the returning array outside of the function

// COPY
// array: .slice, the spread operator, concat 
// str: slice, substr, substring
// obj: Object.assign, spread operator 


function countDown(num){
    while (num > 0){
        console.log(`CountDown ${num}`)
        num--
    }

}
countDown(9)