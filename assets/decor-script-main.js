// переход на страницу каталога при нажатии соответствующей кнопки 
document.getElementById('to-main-page').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// переход на страницу оформления заказа при нажатии соответствующей кнопки 
document.getElementById('to-order-page').addEventListener('click', () => {
    window.location.href = 'order_form.html';
});


const addOut = document.querySelector('.add-out');
const addImageOut = document.querySelector('.add-image-out');
let a = document.getElementById('misc'); // checkbox
let decorOptionCost = 0;
let addDecorOption = document.getElementById('add-option-list'); // стоимость упаковки
let orderRequest = document.getElementById('order');

let orderSum; // общая стоимость заказа
let item=0;

// кнопка очистить корзину
document.getElementById('delete').onclick = deleteItem;


// извлекаем элементы из localStorage
let cartItems = JSON.parse(localStorage.name);
console.log(cartItems);


if (cartItems.length === 0){
    document.getElementById('block_items').innerHTML = '&#10048;&nbsp; Cart is empty &nbsp;&#10048;';
} else {
    let i=0;
    let bukietTotal = 0;
    for (let j = 0; j< cartItems.length; j++){
        itemOut(cartItems,i); // вызов функции вывода данных
        let itemCost = 0;
        itemCost = +cartItems[j].price;
        bukietTotal += itemCost; // стоимость букетов (без оформления)
        i++;
    } // end of FOR

orderSum = bukietTotal;
document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // ввывод общей стоимости букетов (без оформления)

addDecorOption.onchange = getOptionCost;   // добавление стоимости упаковки к общей стоимости
addOut.addEventListener('click', showAdd); // вывод доп оформления по клику checkbox
orderRequest.onclick = getOrderRequest;   // добавление стоимости упаковки к общей стоимости

// функция записи заказа в localStorage
function getOrderRequest (){
    localStorage.setItem('order', JSON.stringify(orderArray));
   
}


// второй способ вывода содержимого localStorage в корзину данных букета: название, цена, картинка
function itemOut(cart,k){
    document.getElementById('block_items').innerHTML += `<img src="${cartItems[k].imgSrc}" width="200px"">
            <div class="fonts"><span class="item-descript">&#10048;&nbsp Букет: </span>${cartItems[k].title}</div>
            <div class="fonts"><span class="item-descript">&#10048;&nbsp Цена букета: $</span>${cartItems[k].price}</div>
            <div class="fonts-add"><input type="checkbox" id="${delete[k]}"> delete</div>`
        }

// функция добавления упаковки
function getOptionCost() {
    orderSum -= decorOptionCost;
    decorOptionCost = +addDecorOption.value;
    orderSum += decorOptionCost;
    document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
};


// функция вывода доп оформления по клику checkbox
function showAdd(event){
    if (a.checked){
        for (let key in dodatki) {
            let img = document.createElement('img');
            let name = dodatki[key]['name'];  // цена выбранного оформления
            let value = dodatki[key]['value'];  // цена выбранного оформления

            img.setAttribute('data-key', key);
            img.title = name + ': $' + value; // назначение атрибута title
            img.alt = 'Подарок: ' + name + ': ' + value; // назначение атрибута title
            img.src = 'assets/images/' + key + '.png';
            addImageOut.append(img);
            img.after(' ');
        }
        addImageOut.addEventListener('click', pickAddImage); // выбор оформления
    } else {
        orderSum -= item;
        item=0;
        document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        document.getElementById('add-image-out').innerHTML = '';
    }
}

// выбор/снятие выбора картинки доп опций
function pickAddImage(event){
    let key = event.target.dataset['key'];
    value = dodatki[key]['value'];  // цена выбранного оформления
        if (key === undefined){
            return false;
        }
        if (event.target.classList == 'active') {
            event.target.classList.remove('active');
            item-=value;
            orderSum -= value;
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        } else {
            event.target.classList.add('active');
            item+=value;
            orderSum += value;
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        }
    }
cartItems = [];

} //end of ELSE

// функция очистки корзины
function deleteItem(){
    document.getElementById('block_items').innerHTML = '&#10048;&nbsp; Cart is empty &nbsp;&#10048;';
    orderSum = 0;
    decorOptionCost = 0;
    document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
    document.getElementById('add-image-out').innerHTML = '';
    localStorage.clear();
}
