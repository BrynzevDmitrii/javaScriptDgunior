//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let num = 0;
while (num < 100){
    num++;
    console.log(num);
}

//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let basket = [
    {
        product: "Куртка",
        price: 2500,
    },
    {
        product: "Джинсы",
        price: 3000,
    },
    {
        product: "Футболка",
        price: 900,
    },
    {
        product: "Кросовки",
        price: 2000,
    }
];

function countBasketPrice(basket) {
    let sumBaskerPrice = 0;
    for (let prod of basket){
        sumBaskerPrice += prod.price;
    }
    return sumBaskerPrice;
}

console.log(countBasketPrice(basket));

//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
for (let i = 0; i<= 9; i++,console.log(i)); 
// *Нарисовать пирамиду с помощью console.log

let pyromid = 'x';
for (let i = 0; i < 20; i++) {

    pyromid += 'x';

    console.log(pyromid);
}