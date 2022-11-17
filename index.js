let json = `[{
    
    "name": "Красочный микс-букет",
    "photo": "././assets/images/beautiful-flower-bouquets-82.jpg",
    "price": "30$",
    "description": "Лилии, герберы, ...",
    "design": "Лента, упаковочная плёнка"  
},
    
    
{
    "name": "Композиция из оранжевых роз и мягких кактусов",
    "photo": "././assets/images/beautiful-flower-bouquets-85.jpg",
    "price": "35$",
    "description": "Нежно-оранжевые розы, мини-кактусы с мягкими иголками, зелень",
    "design": "Лента, упаковочная плёнка"  
},

{
   
    "name": "Ароматный микс-букет с бутонами лилий",
    "photo": "././assets/images/beautiful-flower-bouquets-46.jpg",
    "price": "25$",
    "description": "Композиция гербер, роз, лилий и белых ....",
    "design": "Лента, упаковочная плёнка"  
},


{  
    "name": "Чувственная композиция в розово-фиолетовых тонах",
    "photo": "././assets/images/beautiful-flower-bouquets-47.jpg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "design": "Лента, упаковочная плёнка" 


}]`;


document.addEventListener("DOMContentLoaded", function (event) {
    let flowers = JSON.parse(json); 
    console.log(flowers);
    let flowersContent = "";
    
    for (let flower of flowers) {
        flowersContent +=`<div class="flowers">
        <div class="flowers_photo_container">
        <img class="flowers_photo" src="${flower.photo}"/>
        </div>
        
        <div class="flowers_name_container">
        <h2>${flower.name}</h2>
        </div>

        <div class="flowers_describe_container">
        <div><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Стоимость: </span> ${flower.price}</div>
        <div><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Описание: </span>${flower.description}</div>
        <div> <span style = "color: rgb(7, 97, 111); font-weight:bold;"> Декор: </span>${flower.design}</div>
        </div>
        <br>
        <div class="button_basket_container">
        <button class="button_basket">Добавить в корзину</button>
        </div>
        <br>
        <br>
        </div>`; 

        document.getElementById("flowersContainer").innerHTML = flowersContent;

    }

});


let cart = {
    tovar1: {
        quantity: 5,
        price: 1000
    },

    tovar2: {
        quantity: 0,
        price: 300
    },

    tovar3: {
        quantity: 0,
        price: 1
    }
}


document.onclick = event => {
    // console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
        countPrice(cart)
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
        countPrice(cart)
    }

}
// увеличение количества товаров
const plusFunction = id => {
    cart[id].quantity++;
    // calcResult(cart[id].quantity * cart[id].price);

    renderCart();
}
// уменьшение количества товаров
const minusFunction = id => {
    if (cart[id].quantity <= 0) {
        renderCart(id);
        return true;
    }
    cart[id].quantity--;
    renderCart();
}

// сделать кнопку Удалить товары
// удаление товаров из коризины
// const deleteFunction = id => {
//     delete cart[id];
//     renderCart();
// }

const renderCart = () => {
    console.log(cart);
}
renderCart();
// переписать, чтобы количество товаров было неограниченно

let totalPrice = document.querySelector('.total-price');

const countPrice = (objCart) => {
    let result = 0;
    Object.values(objCart).map((tovar) => {
        result += tovar.price * tovar.quantity;
    });
    console.log(result);

    totalPrice.innerHTML = `Итого: ${result}`;
}
console.log(typeof totalPrice.innerHTML);


//https://thypix.com/ru/kartinki-krasivyh-buketov-tsvetov/