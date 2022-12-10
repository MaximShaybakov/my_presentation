'use strict';
// this is comments
/* 
let message;
message = 'Я Java Script!';
alert(`${message}`);
const date = '01.01.2000';
*/
let admin;
let name = 'John';
admin = name;
alert(`${admin}`);
let planet;
planet = 'Earth';
alert(`${planet}`);
alert(1 / 0);

// определяем тип BigInt. Число должно заканчиваться на 'n'
let bigInt = 5362875639487563287659768765754365423425434n; // только так!!!

alert(true === false === null);

// тип объекта
alert(typeof planet); //string

// modal window
let age = prompt('How old are you?', 18);
alert(`You are ${age} years old`);

let question = confirm('Exit?');
alert(question);


// ------------------- ПРЕОБРАЗОВАНИЕ ТИПОВ -----------------------

let number = 10;
let str = String(number); // or string "4" to number "Number(str)"

alert( "6" / "2" ); // 3, строки преобразуются в числа
// если преобразование невозможно вывод - "Nan"

/* Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
Все остальные значения становятся true. */

// ------------------------- МАТЕМАТИЧЕСКИК ОПЕРАЦИИ ----------------------

alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // будет "41", а не "221"

alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5



