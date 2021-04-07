//1 task
const arr = ['a', 'b', 'c']
const arr1 = [1, 2, 3]
console.log(arr.concat(arr1))

//2 task
let arr2 = ['a', 'b', 'c']
arr2.push(1, 2, 3);
console.log(arr2);

//3 task
let arr3 = [1, 2, 3]
console.log(arr3.reverse());

//4 task and 5 task
let arr4 = [1, 2, 3, 4, 5]
console.log(arr4.slice(0, 3));
console.log(arr4.slice(3, 5));

//6 task forEach ?????????????????
const arr5 = [
    {js:'test', jq: 'hello', css: 'world'}
  ]
arr5.forEach(arr5 => console.log(arr5.id))

//7 task
let arr6 = [1, 2, 3, 4, 5]
arr6.splice(0, 5, 5, 4, 3, 2, 1)
console.log(arr6);

//8 task
let arr7 =  [[1, 2, 3], [4, 5], [6]]
let resultReduce = arr7.flat().reduce((sum, current) => sum + current, 0);
console.log(resultReduce);

//9 task
let arr8 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let arr8Inter = arr8.flat()
console.log(arr8Inter);
let resultArr8 = arr8Inter.flat().reduce((sum, current) => sum + current, 0);
console.log(resultArr8);

//10 task ????????????????
const a = [1, 2, 3]
const b = [1, 2, 3]
let func = (a, b) => {
    if(a.length == b.length){
        console.log(true);
    } else {
        console.log(false);
    }
}
console.log(func);

//11 task
let arr9 = [1, 2, 3, 4, 5]
console.log(arr9.map(e => e * e));

//12 task
let arr10 = [-1, -5, 5, 15,-87, 63]
console.log(arr10.filter(element => element < 0));

//13 task
let arr11 = [2, 5, 8, 7, 15, 33]
console.log(arr11.reduce((sum, current) => sum + current, 0));