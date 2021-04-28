const cartBascet = document.querySelector('.basket');

const prodCart = document.querySelectorAll('.products__car');

const fullProductBascet = document.querySelector('.fullprice')

function addCartBascet(event) {
    const eventButtn = event.target.id;

    for (const i of prodCart) {

    let hty = i.children[2].id;
    const errere = i.children; 
    console.log(errere)

    if (hty === eventButtn) {
    const newDiv = document.createElement('div');
    const newImg =  document.createElement('img'); 
    newImg.src=`/img/${eventButtn}.jfif` ;
    newImg.alt = `alt = "${eventButtn}"`;
    const prises = document.createElement('h2')
    prises.innerHTML = `price:${i.children[1].innerHTML}`
    prises.dataset = `${i.children[1].innerHTML}`
    newDiv.appendChild(newImg);
    newDiv.appendChild(prises);
    cartBascet.appendChild(newDiv);
    let vwerwe = [];
    vwerwe.push(cartBascet)
    console.log(vwerwe)
    let priceCor = vwerwe[0]
    

    }
    //console.log(ererfe)
    priseProductBascet()
    }
    ;
}
function priseProductBascet() {
    //document.createElement('div');
    //priseProductBascet.innerHTML = 
    cartBascet
    console.log(cartBascet)
    for (const i of prodCart) {

    let hty = i.children[2].id;
    i.children[1].innerHTML;

    //let hu = cartBascet.children.children[1].innerHTML

    console.log(
        hty
    )}
};







function buttn(){
    const btn = document.querySelectorAll('.products__car');
    for(z of btn){
    z.addEventListener('click',addCartBascet);
};    
}

buttn();

