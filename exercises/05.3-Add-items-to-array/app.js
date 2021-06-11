var arr = [4,5,734,43,45,2,4];
// Your code here, use the push function and the random function.
function randomNumber() {
    var num = Math.floor((Math.random() * 7) + 1);
    arr.push(num);
}    
console.log(arr);