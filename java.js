//№2    Чему будет равен x в примере ниже?
let t = 2;
let x = 1 + (t *= 2);
console.log(x);




//№3  Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
 //Затем написать скрипт

let a = prompt('Введите переменную a');
let b = prompt('Введите переменную b');

if(a > 0 && b > 0){
    console.log(result = a - b); 
}
else if( a < 0 && b < 0)
{
    console.log(result = a*b);
}
else if(a < 0 && b > 0 ){
    console.log(result = a+b);
}




//№5  Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

function Summ(q, w){
    return(q + w);
}
console.log(Summ(3, 5));

function Razn(q, w){
    return(q - w);
}
console.log(Razn(5, 5));

function Umnog(q, w){
    return(q * w);
}
console.log(Umnog(7, 5));

function delen(q, w){
    return(q / w);
}
console.log(delen(33, 11));






//№ 6  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).


function mathOperation(arg1, arg2,operation){
    switch (operation) {
        case 1:
            operation = arg1 +arg2;
            break;
        case 2:
            operation = arg1 - arg2;
            break;
        case 3:
            operation = arg1 * arg2;
            break;
    
        default:isNaN(5>5)
            break;
    }
    return operation;
}
console.log(mathOperation(3, 8, 1));

//№7  С помощью рекурсии организовать функцию возведения числа в степень.


function power(val,pow) {
    let result = 1;
    for (let i = pow; i >= 1; i--) {
        result *= val;
		
    } 
    return result;
}
console.log(power(2, 3));
