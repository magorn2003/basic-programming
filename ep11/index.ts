const database = [
    {
        email: 'tttt@utk.ac.th',
        password: '66666666',

    }
]


function login(email: string,password: string) {
    const user = database.filter(function(element, index){

    }) 
    if (user.length > 0) {
        if(user[0].password === password) {
            console.log('เข้าสู่ระบบแล้ว')
    } else {
        console.log('ใส่รหัสผ่านไม่ถูกต้อง')
    
    }
} else {
    console.log('ไม่มีผู้ใช้งานในระบบ')
}

    }
{
    login('tttt@utk.ac.th', '66666666')
}
