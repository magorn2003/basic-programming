function tsize(size: string) {
    switch (size) {
        case ('s'):
            console.log('ผอม')
            break
        case ('m'):
            console.log('ผอม')
            break
        case ('l'):
            console.log('ท้วม')
            break
        case ('xl'):
            console.log('อ้วน')
            break
        case ('xxl'):
            console.log('อ้วน')
            break
            default:
            console.log('you')
            break
    }
}
tsize('s')


function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67667, 10))

function jayda(n: number) {
    const x = n.toLocaleString()
    return x
}
console.log(jayda(1000))

const str: string = "kitsanakarn"

console.log(str.charAt(1)) 

const str: string = "Kitsana"

console.log(str.toLocaleLowerCase()) 

function checkStringLength(f: string) {
    console.log(f.length)
}
checkStringLength('อยากกลับบ้าน')


function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
}

console.log(getCharByIndex('ไม่รู้ๆ', 2))

const str: string = 'อยากนอน'

console.log(str.indexOf('ก'))

function test(msg: string , search: string) {
    if (msg.includes(search) === true) {
        console.log('ไม่พบคำค้นหา')
    }
}

test('กลับบ้าน' , 'sasa')