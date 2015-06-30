/**
 * Created by Strahil on 11/24/14.
 */
'use strict';
var test1 = 'login=student&password=student';
var test2 = [
    'field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret'
];
var test3 = [
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
];

solve(test3);

function solve(input) {
    for (var i in input) {
        var output = {};
        var text = input[i].replace(/\+/g, ' ');
        text = text.replace(/%20/g, ' ');
        var questionMark = text.indexOf('?');
        if (questionMark >= 0) {
            text = text.substring(questionMark + 1, text.length);
        }
        var pairs = text.split('&');
        //console.log(pairs);
        for (var j in pairs) {
            var tokens = pairs[j].split('=');
            //console.log(tokens);
            var parameter = tokens[0].trim();
            var value = tokens[1].replace(/[ ]+/g, ' ').trim();
            //console.log(value + '/' + parameter);
            if (!output[parameter]) {
                var values = [value];
                output[parameter] = values;
            } else {
                output[parameter].push(value);
            }
        }
        var keys = Object.keys(output);
        var text = '';
        for (var i in keys) {
            text += keys[i] + '=' + '[' + output[keys[i]].join(', ') + ']';
        }
        console.log(text);

    }
}