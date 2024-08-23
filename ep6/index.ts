//for (let i = 1; i <= 31; i++) {
 //   sum = sum + i
//}

//console.log('Total: ', sum)

let sum: number = 0
let i: number = 1


while (i<=31) {
    sum = sum + i
    i++
}
console.log('Total: ', sum)

let sum: number =0
let i: number = 1
do {
    sum = sum + ii++
}while (i <= 31)

    console.log('Total: ', sum)

    let age: number = 0
    for (let i = 1; i <= 20; i++) {
        age = age + i
        console.log('ฉันอายุ', i ,'ปี')
    }
console.log(age)
    
const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}



const mookata: string[] = ['flim' , 'froth' , 'muju' , 'tang' , 'khaw']
for (let i = 0; i < mookata.length; i++) {
    if (mookata[i] === 'muju') {
        console.log('ไปกินหมูกระทะกัน')
    }
}

const leg: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < leg.length; i++) {
    if (leg[i] === 3 || leg[i] === 5 || leg[i] === 7) {
        leg[i] = 0
    }
}

console.log(leg)
