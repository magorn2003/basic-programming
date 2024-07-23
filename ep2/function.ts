//function add(a: number, b: number) {
  //  return a + b
//}

//console.log(add(2, 2))


//function down(a: number, b: number) {
   // return a - b
//}
//console.log(down(5, 2))

//function twin(a: number,b: number, c: number, d: number) {
  //  return a*b*c*d
//}
//console.log(twin(2, 2, 2, 2,))


//function grade(homework: number, midterm: number, final: number) {
    //let score: number = homework + midterm + final
    //if (score < 50) {
      //  return 'สอบตก'
      // } else {
     //   return 'สอบผ่าน'
     //  } 
  //  }
    //console.log(grade(20, 15, 30))


function grade(homework: number, midterm: number, final: number) {
  let score: number = homework + midterm + final
  if (score < 50) {
    return 'เกรด f'
  } else if (score < 60) {
    return 'เกรด d'
  } else if (score < 70) {
    return 'เกรด c'
  } else if (score < 80) {
    return 'เกรด b'
  } else {
    return 'เกรด a'
  }
}
console.log(grade(23,18,32))

