var readlineSync = require('readline-sync');
var infor = require('./infor');
var student = [];
    do
    {
        var choice = readlineSync.question("Enter your choice (1-3): ");
        input = parseInt(choice);
    } while (input<1 || input>3 || isNaN(input));


    switch (input) {
        case 1:
            console.log('Moi nhap them sinh vien');
            var ten = readlineSync.question("Enter your name: ");
            var tuoi = readlineSync.question("Enter your age: ");
            var id = readlineSync.question("Enter your id: ");
            var gpa = readlineSync.question("Enter your GPA: ");
            var newStudent = new infor(ten, parseInt(tuoi), id, parseFloat(gpa));
            student.push(newStudent);
            //console.log(student);
            break;
    
        case 2:
            console.log('Hien danh sach sinh vien');
            console.log(student);
            break;
    }