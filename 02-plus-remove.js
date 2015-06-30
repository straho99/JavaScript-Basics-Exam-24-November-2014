/**
 * Created by Strahil on 11/24/14.
 */
'use strict';
var test1 = [
    'ab**15',
    'bBb*555',
    'absh*5',
    'ttHHH',
    'ttth',
];

//console.log('b'.toUpperCase());
solve(test1);

function solve(lines) {
    var output = [];
    for (var i = 0; i < lines.length; i++) {
        output.push([]);
        for (var j = 0; j < lines[i].length; j++) {
            output[i].push(lines[i][j]);
        }
    }
    //console.log(output);
    for (var i = 0; i < lines.length - 2; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            var a = lines[i][j];
            if (a != undefined) {
                a= a.toLowerCase();
            }
            var b = lines[i + 1][j - 1];
            if (b != undefined) {
                b = b.toLowerCase();
            }
            var c = lines[i + 1][j];
            if (c != undefined) {
                c = c.toLowerCase();
            }
            var d = lines[i + 1][j + 1];
            if (d != undefined) {
                d = d.toLowerCase();
            }
            var e = lines[i + 2][j];
            if (e != undefined) {
                e = e.toLowerCase();
            }
            //console.log(a + b + c + d + e);
            if (a == b && b == c && c == d && d == e) {
                output[i][j] = '';
                output[i + 1][j - 1] = '';
                output[i + 1][j] = '';
                output[i + 1][j + 1] = '';
                output[i + 2][j] = '';

            }
        }
    }
    for (var i in output) {
        console.log(output[i].join(''));
    }
}