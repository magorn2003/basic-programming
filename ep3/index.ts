function helloWord() {
    console.log("สวัสดี")
}

helloWord()

function helloName (name: string) {
    console.log(name)
}

helloName('Magorn')

function getPi() {
    return 3.14
}

console.log(getPi())



function st(fname: string, fname: string, tname: string) {
    if (!(fname === 'mix' && fname === 'zane' && tname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('เป็นเท็จ')
    }
}

st('mix', 'zane', 'forth')


function test(gender: string, height: number, weight: number){
    if (gender === 'ชาย' && height >170 || (weight >50 && weight <= 110)){
        console.log('จับใบดำใบแดง')
    }else{
        console.log('ไม่เข้าเกณฆ์')
    }
}
test('ชาย', 171, 55)


function money (age: number, salary: number, deposit: number){
    if(age >= 16 && salary < 70000 && deposit < 500000 ){
        console.log('รับ10000บาท')
    } else {
        console.log('อด')
    }
}
money(16,60000,400000)
        
   
