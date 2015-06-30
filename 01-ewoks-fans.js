/**
 * Created by Strahil on 11/24/14.
 */
'use strict';
var test1 = [
    '22.03.2014',
    '17.05.1933',
    '10.10.1954'
];
var test2 = [
    '22.03.2000'
];
var test3 = [
    '22.03.1700',
    '01.07.2020'
];

solve(test2);


function solve(input) {
    var birthDates = [];
    var beforeDate = new Date(1900, 0, 1, 0, 0, 0);
    var afterDate = new Date(2015, 0, 1, 0, 0, 0);
    var borderDate = new Date(1973, 4, 25, 0, 0, 0);
    //console.log(borderDate);
    //console.log(beforeDate);
    //console.log(afterDate);
    for (var i in input) {
        var tokens = input[i].trim().split('.');
        var day = parseInt(tokens[0]);
        var month = parseInt(tokens[1]) - 1;
        var year = parseInt(tokens[2]);
        var newDate = new Date(year, month, day, 0, 0, 0);
        if (newDate > beforeDate && newDate < afterDate) {
            birthDates.push(newDate);
        }
    }
    if (birthDates.length == 0) {
        console.log('No result');
        return;
    }
    var fans = [];
    var haters = [];
    for (var i in birthDates) {
        if (birthDates[i] <= borderDate) {
            haters.push(birthDates[i]);
        } else {
            fans.push(birthDates[i]);
        }
    }
    var biggestFan;
    var biggestHater;
    if (fans.length > 0) {
        var biggestFan = Math.max.apply(null, fans);
        biggestFan = new Date(biggestFan);
        biggestFan = biggestFan.toDateString();
    } else {
        biggestFan = '';
    }
    if (haters.length > 0) {
        biggestHater = Math.min.apply(null, haters);
        biggestHater = new Date(biggestHater);
        biggestHater = biggestHater.toDateString();
    } else {
        biggestHater = '';
    }
    if (biggestFan != '') {
        console.log('The biggest fan of ewoks was born on ' + biggestFan);
    }
    if (biggestHater != '') {
        console.log('The biggest hater of ewoks was born on ' + biggestHater);
    }
}