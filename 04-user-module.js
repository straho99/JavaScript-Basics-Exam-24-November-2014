/**
 * Created by Strahil on 11/24/14.
 */
'use strict';
var test1 = [
    'level^courses',
    '{"id":0, "firstname":"Angel", "lastname":"Ivanov", "town":"Plovdiv","role":"student","grades":["5.89"],"level":2, "certificate":false}',
    '{"id":1, "firstname":"Mitko", "lastname":"Nakova", "town":"Dimitrovgrad","role":"trainer","courses":["PHP", "Unity Basics"],"lecturesPerDay":6}',
    '{"id":2, "firstname":"Bobi", "lastname":"Georgiev", "town":"Varna","role":"student","grades":["5.59", "3.50", "4.54", "5.05", "3.45"],"level":4, "certificate":false}',
    '{"id":3, "firstname":"Ivan", "lastname":"Ivanova", "town":"Vidin","role":"trainer","courses":["JS", "Java", "JS OOP", "Database", "OOP", "C#"],"lecturesPerDay":7}',
    '{"id":4, "firstname":"Mitko", "lastname":"Petrova", "town":"Sofia","role":"trainer","courses":["Database", "JS Apps"],"lecturesPerDay":2}'
];

solve(test1);

function solve(input) {
    var temp = input[0].split('^');
    var sortCriteriaStudents = temp[0].trim();
    var students = [];
    var trainers = [];

    for (var i = 1; i < input.length; i++) {
        var person = JSON.parse(input[i]);
        if (person['role'] == 'student') {
            students.push(person);
        } else {
            trainers.push(person);
        }
    }

    if (sortCriteriaStudents == 'name') {
        students = students.sort(function (a, b) {
            if (a.firstname < b.firstname) {
                return -1;
            } else if (a.firstname == b.firstname) {
                if (a.lastname < b.lastname) {
                    return -1;
                } else if (a.lastname == b.lastname) {
                    return 0;
                } else {
                    return 1;
                }
                return 0;
            } else {
                return 1;
            }
        });
    } else {
        students = students.sort(function (a, b) {
            if (a.level < b.level) {
                return -1;
            } else if (a.level == b.level) {
                if (a.id < b.id) {
                    return -1;
                } else if (a.id == b.id) {
                    return 0;
                } else {
                    return 1;
                }
                return 0;
            } else {
                return 1;
            }
        });
    }

    trainers = trainers.sort(function (a, b) {
        if (a['courses'].length < b['courses'].length) {
            return -1;
        } else if (a['courses'].length == b['courses'].length) {
            if (Number(a.lecturesPerDay) < Number(b.lecturesPerDay)) {
                return -1;
            } else if (Number(a.lecturesPerDay) == Number(b.lecturesPerDay)) {
                return 0;
            } else {
                return 1;
            }
            return 0;
        } else {
            return 1;
        }
    });

    var finalStudents = [];
    for (var i in students) {
        delete students[i].level;
        var sumOfGrades = 0;
        for (var j in students[i].grades) {
            sumOfGrades += Number(students[i].grades[j]);
        }
        var averageGrade = (sumOfGrades / students[i].grades.length).toFixed(2);
        var newStudent = {
            'id': students[i].id,
            'firstname': students[i].firstname,
            'lastname': students[i].lastname,
            'averageGrade': averageGrade,
            'certificate': students[i].certificate
        }
        finalStudents.push(newStudent);
    }

    for (var i in trainers) {
        delete trainers[i].town;
        delete trainers[i].role;
    }

    var finalOutput = {
        'students': finalStudents,
        'trainers': trainers
    };
    //console.log(trainers);
    console.log(JSON.stringify(finalOutput));
}