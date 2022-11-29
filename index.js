// получение JSON-файла через fetch
fetch("./assets/catalogue.json",{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
})
.then((response) => {
    let catalogue = response.json()
    return catalogue;
})
.then((catalogue) => {
    console.log(catalogue);
    getFlowersOut(catalogue);
})
.catch(error => console.log(error))


//document.addEventListener("DOMContentLoaded", function (event) {
function getFlowersOut(flowers) {
//let flowers = JSON.parse(json);
//console.log(flowers);
let flowersContent = "";
for (let flower of flowers) {
    flowersContent +=`<div class="flowers_card ${flower.category}">
    <div class="flowers_photo_container">
    <img class="flowers_photo" src="${flower.photo}"/>
    </div>
    <div class="flowers_name_container">
    <h3 class="flower_name">${flower.name}</h3>
    </div>
    <div class="flowers_describe_container">
    <div class="flower_price"><span style = "color: #0093A2; font-size: 20px; font-weight:bold;">
    Стоимость: </span> <span class="price_number"> ${flower.price}</span> $</div>
    <div class="flower_description">${flower.description}</div>
    <div><span style = "color: white"> <span > Категория: </span>${flower.category}</div>
    </div>
    <br>
    <div class="button_basket_container">
    <button data-catalog class="button_basket" id="wow">Добавить в корзину</button>
    <div id="button_check"></div>
    </div>
    <br>
    <br>
    </div>`;
    document.getElementById("flowersContainer").innerHTML = flowersContent;
}


//получаем доступ к дата-фильтрам
const buttons = document.querySelectorAll('.button_')
//console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        console.log(currentCategory);
        const cards = document.querySelectorAll('.flowers_card')
        console.log(cards);
        filter(currentCategory, cards);
    })
})
}
//делаем функцию, которая проверит, какую кнопку нажали.
//Затем пробежит по карточкам и поищет карточки с той же категорией.
//когда функция найдет карточки с той же категорией, она их оставит. Остальные карточки - скроет
function filter (category, items) {
    items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all-flowers'
        if(isItemFiltered && !isShowAll) {
            item.classList.add('hide');
        }
        else {
            item.classList.remove('hide');
        }
    });
}

//});


const buttons = document.querySelectorAll('.button_');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("category_name").innerText = button.value;
    })
});


//добавляем товары в корзину
let cardsArray = [];
window.addEventListener('click', function(event) {
    //проверяем, что клик был совершен по кнопке в корзину
    if(event.target.hasAttribute('data-catalog')) {
    
        //console.log('я из корзины!');
    //находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.flowers_card');
         //console.log(card);
    //собираем данные с этого товара и записываем их в единый объект cardInfo:
        const cardInfo = {
            title: card.querySelector('.flower_name').innerText,
            price: card.querySelector('.price_number').innerText,
            imgSrc: card.querySelector('.flowers_photo').getAttribute('src'),
        };
            cardsArray.push(cardInfo);
            // запись выбранных букетов в localStorage
            localStorage.setItem('name', JSON.stringify(cardsArray));

            console.log(cardsArray);
            /*let cardsArrayString = JSON.stringify(cardsArray);
            localStorage.setItem ('name', cardsArrayString);*/
            //let cartItems = JSON.parse(localStorage.name);
            //console.log(cartItems);
            //console.log(cartItems.length);
    }
});

/*
// Scroll indicator
window.onscroll = function() {myFunction()};
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
//должен выводиться процент прокрутки
//element.innerHTML = Math.floor(scrolled)+ '%';
}
*/