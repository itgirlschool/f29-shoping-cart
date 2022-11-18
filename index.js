let json = `[{
    
    "name": "Цветы",
    "photo": "././assets/images/1.webp",
    "price": "30$",
    "description": "Лилии, герберы, ...",
    "category": "bouquet" 
},
    
    
{
    "name": "Цветы",
    "photo": "././assets/images/beautiful-flower-bouquets-85.jpg",
    "price": "35$",
    "description": "Нежно-оранжевые розы, мини-кактусы с мягкими иголками, зелень",
    "category": "bouquet" 
},

{  
    "name": "Цветы",
    "photo": "././assets/images/18.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 

},

{
   
    "name": "Цветы",
    "photo": "././assets/images/14.jpeg",
    "price": "25$",
    "description": "Композиция гербер, роз, лилий и белых ....",
    "category": "basket" 
},

{  
    "name": "Цветы",
    "photo": "././assets/images/19.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 

},


{  
    "name": "Цветы",
    "photo": "././assets/images/20.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/2.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/13.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/14.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/3.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},


{  
    "name": "Цветы",
    "photo": "././assets/images/6.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/7.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/17.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/5.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "bouquet" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/8.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/9.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},


{  
    "name": "Цветы",
    "photo": "././assets/images/16.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 
},

{  
    "name": "Цветы",
    "photo": "././assets/images/11.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 
},


{  
    "name": "Цветы",
    "photo": "././assets/images/13.jpeg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "basket" 

},

{  
    "name": "Цветы",
    "photo": "././assets/images/15.webp",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "category": "roses" 

}
]`;


document.addEventListener("DOMContentLoaded", function (event) {
    let flowers = JSON.parse(json); 
    console.log(flowers);
    let flowersContent = "";
    
    for (let flower of flowers) {
        flowersContent +=`<div class="flowers_card">
        <div class="flowers_photo_container">
        <img class="flowers_photo" src="${flower.photo}"/>
        </div>
        <div class="flowers_name_container">
        <h2>${flower.name}</h2>
        </div>
        <div class="flowers_describe_container">
        <div><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Стоимость: </span> ${flower.price}</div>
        <div><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Описание: </span>${flower.description}</div>
        <div style = "color: pink"> <span > Категория: </span>${flower.category}</div>
        </div>
        <br>
        <div class="button_basket_container">
        <button class="button_basket">Добавить в корзину</button>
        </div>
        <div class="${flower.category}"></div>
        <br>
        <br>
        </div>`; 

        document.getElementById("flowersContainer").innerHTML = flowersContent;
    }

})




function app() {
    const buttons = document.querySelectorAll('.button_')
    const cards = document.querySelectorAll('.flowers_cards')

//делаем функцию, котрая проверить, какую кнопку нажали. 
//Затем пробежит по карточкам и поищет карточки с той же категорией.
//когда функция найдет карточки с той же категорией, она их оставит. Остальные карточки - скроет

function filter (category, items) {
    items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        if(isItemFiltered) {
            item.classList.add('hide')
        }

    })
}


//получаем доступ к дата-фильтрам
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            //console.log(button.dataset.filter)
            console.log(currentCategory);
        })
    })

        }



    /*const currentCategory = button.dataset.filter
   

    filter(currentCategory, cards)
    
  
   
    console.log(buttons);
    console.log(cards);
    
    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll=category.toLowerCase() === 'all'
            if(isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            }
            else  item.classList.remove('hide')
        })
    
    }}
    
  
    
 
    })*/
    
    app();
   
    


/*let cart = {
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
console.log(typeof totalPrice.innerHTML);*/




//https://thypix.com/ru/kartinki-krasivyh-buketov-tsvetov/