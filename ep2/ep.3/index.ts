function st(fname: string,sname: string, tname: string){
    if ((fname === 'nan' || sname === 'pleum') && tname === 'yo' ){
        console.log('เริ่มสอน')
    }else {
        console.log('ยังไม่สอน')
    }
        
}
st('nan','pleum','yo')

function test(gender: string , height: number, weight: number) {
    if (gender === 'male' && height > 170 ||(weight >50 && weight < 110)) {
        console.log('จับใบดำ ใบแดง')
    } else {
        console.log('ไม่เข้าเกณฆ์')
    }
}
test('male', 400,100)