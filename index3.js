/*let arr = [1, 4, 9]
if (arr[0] > 4) console.log( 'false')
if (arr[1] === 4) console.log('true')
if (arr[2] > 4) console.log( 'true')


let i = 0
while(i < 13){
    console.log(i)
    i++
    if (i==8) break;
}

let q = 30
while(q<=61) {
    console.log(q)
    q++
    if (q==60) break;
}

let w = 50
while (w <= 270){ 
    if(w % 10 == 0) console.log(w)
    w++
}*/

// 1 task
let z = true + false
console.log(z)
let x = 12 / "6"
console.log(x)
let c = "number" + 15 + 3
console.log(c)
let v = 15 + 3 + "number"
console.log(v)
let b = [1] > null // 1>0
console.log(b)
let n = "foo" + + "bar"
console.log(n)
let m = 'true' == true //строчное != число
console.log(m)
let l = false == 'false' // анологично предыдущему
console.log(l)
let k = null == '' //не знаю, когда будешь проверять сскажи пожалуйста
console.log(k)
let j = !!"false" == !!"true"  //не понимаю что значит !!
console.log(j)
let h = ['x'] == 'x' // строка == строке
console.log(h)
let g = [] + null + 1  // не понимаю, 0+0+1=1
console.log(g)
let f = 0 || "0" && {} // JS эти скобки {} воспринимает как функцию, а функция это подвид объекта
console.log(f)
let d = [1,2,3] == [1,2,3] // это два разных массива, они не могут быть равно между собой
console.log(d)

// 2 task
let p = 3;
while (p) {
  console.log( p-- ); //1)изменил чтоб не всплывало постоянно 2) потому что когда функция дойдет до 0 она станет ложной и прекратиться
}

// 3 task
let o = 40
while(o <= 91){
    console.log(o)
    o++
}


// 4 task
let u = 11
while(u <= 340){
    if (u % 4 === 0) console.log(u)
    u++
}


// 5 task
for (let y = 100; y > -6; y--)
console.log(y)


// 6 task
const arr = [1, 6, 8, 14, 0, 4]
for (let t = 0; t < arr.length; t++){
    if(arr[t] < 10 && arr[t] > 3) console.log(arr[t])
}


// 7 task
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ''
for (let r= 1; r < 10; r++){
    str = str + '-' + r;
}
str = str + '-'
console.log(str)


// 8 task
const arr3 = [' Monday', ' Tues', ' Wens', ' Thur', ' Frid', ' Satu', ' Sund']
for( let dd = 0; dd < arr3.length; dd++){
    if (dd == 5 || dd == 6) {
        document.write('')
        document.write('')
        document.write(arr3[dd].bold())
        document.write('')
        document.write('')
        document.write('')
    } else {
        document.write(arr3[dd])
        document.write('')
    }
}
                
// 9  task
let day = new Date()
let number_day = day.getDay()
console.log(number_day)
const arrDays = [' Воскресенье', ' Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье']
for(let ii = 0; ii < arrDays.length; ii++){
    if(ii == number_day){
        document.write('')
        document.write('')
        document.write(arrDays[ii].bold())
        document.write('')
        document.write('')
        document.write('')
    } else {
        document.write(arrDays[ii])
        document.write('')
    }
}

// 10 task