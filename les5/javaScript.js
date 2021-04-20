//black chez
let itemgrid = document.querySelectorAll('.item-grid');

//итерация по массиву  для  вставки катинок.
for(let elem  of itemgrid){
    elem.innerHTML = "<img src='http://chess-board.ru/img/pieces/pw.svg'>";
    elem.style.background = "black";
}
// итерация по массиву для нумерации.
for(let i = 0;i < 8; i++){
    numbr = itemgrid[i++/2];
    numbr.innerText= i;
    numbr.style.color = "white";
};
//хотел добывить новыйм обьектом шахматы, но почему-то ничего не получается.
//Подскажите что тут не так.

let imse = document.createElement('Newdiv');
imse.innerHTML ="<img src='http://chess-board.ru/img/pieces/pw.svg'>";

for (p = 0; p < 4; p++){
    let pictur = itemgrid[p];
    pictur.appendChild(imse);
    };

//itemgrid[0].appendChild(imse),
//itemgrid[1].appendChild(imse),
//itemgrid[2].appendChild(imse);
//temgrid[3].appendChild(imse);


//white chez
let itemgrid2 = document.querySelectorAll('.item-grid2');

for(let elem  of itemgrid2){
    elem .innerHTML= "<img src='http://chess-board.ru/img/pieces/pb.svg'>";
}
for(let i = 0;i < 8; i++){
    numbr = itemgrid2[i++/2];
    numbr.innerText = i+1;
};

