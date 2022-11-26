let cartItems;

// если в каталоге ничего не выбрано и переходим в пустую корзину try,
// если корзина непустая, то распарсиваем JSON из localStorage
try {
    if (localStorage.getItem('name') == null) {
        document.getElementById('block_items').innerHTML = `<img src="./assets/images/empty-cart.png" width="100px"><br>` + '&#10048;&nbsp; Ваша корзина пуста &nbsp;&#10048;';
        document.getElementById('total-out').innerHTML = 'Сумма: $0'; // ввывод общей стоимости букетов (без оформления)
        document.getElementById('decoration').innerHTML = '';
        cartItems = [];
    } else {
        // извлекаем элементы из localStorage
        cartItems = JSON.parse(localStorage.name);
        console.log(cartItems);
    }
} catch (error) {
    console.log(error);
}

// переход на страницу каталога при нажатии соответствующей кнопки 
document.getElementById('to-main-page').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// переход на страницу оформления заказа при нажатии соответствующей кнопки, 
// при условии, если в корзине что-то есть
    if (cartItems.length !== 0){
        document.getElementById('to-order-page').addEventListener('click', () => {
                window.location.href = 'order_form.html';
        });
}


const addOut = document.querySelector('.add-out');
const addImageOut = document.querySelector('.add-image-out');
let a = document.getElementById('misc'); // checkbox
let decorOptionCost = 0;
let addDecorOption = document.getElementById('add-option-list'); // стоимость упаковки
let orderRequest = document.getElementById('order');

let orderSum; // общая стоимость заказа
let item=0;

// кнопка очистить корзину
document.getElementById('delete').onclick = clearCart;


// массив для отправки на страницу оформления заказа
let orderArray = [];


if (cartItems.length === 0){
    document.getElementById('block_items').innerHTML = `<img src="./assets/images/empty-cart.png" width="100px"><br>` + '&#10048;&nbsp; Ваша корзина пуста &nbsp;&#10048;';
} else {
    let i=0;
    let bukietTotal = 0;
    for (let j = 0; j< cartItems.length; j++){
        itemOut(cartItems,i); // вызов функции вывода данных
        let itemCost = 0;
        itemCost = +cartItems[j].price;
        bukietTotal += itemCost; // стоимость букетов (без оформления)
        orderArray.push(cartItems[j].title);
        i++;
    } // end of FOR


orderSum = bukietTotal;
document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // вывод общей стоимости букетов (без оформления)

addDecorOption.onchange = getOptionCost;   // добавление стоимости упаковки к общей стоимости
addOut.addEventListener('click', showAdd); // вывод доп оформления по клику checkbox

orderRequest.onclick = getOrderRequest;   // добавление стоимости упаковки к общей стоимости


// функция записи заказа в localStorage для передачи на страницу оформления заказа
function getOrderRequest (){
    console.log(orderArray);
    localStorage.setItem('order', JSON.stringify(orderArray));
    localStorage.setItem('totalOrderCost', orderSum); // отправка стоимости заказа в localStorage
}


// второй способ вывода содержимого localStorage в корзину данных букета: название, цена, картинка
function itemOut(cart,k){
    document.getElementById('block_items').innerHTML += `<img src="${cartItems[k].imgSrc}" width="200px"">
            <div class="fonts"><span class="item-descript">&#10048;&nbsp Букет: </span>${cartItems[k].title}</div>
            <div class="fonts"><span class="item-descript">&#10048;&nbsp Цена букета: $</span>${cartItems[k].price}</div>
            <div class="fonts-add"><input type="checkbox" class="checkboxDelete" id="${k}"> delete</div>`;
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

/*
// функция удаления букета их корзины, если нажать checkbox этого букета
function deleteCartItem(k){
        let itemCheckbox = document.getElementsByClassName('checkboxDelete');
        if(itemCheckbox.checked) {
            //const card = event.target.closest('.block_items');
            document.getElementById('block_items').remove(cartItems[k]);
            
        }
}
*/

} //end of ELSE

// функция очистки корзины
function clearCart(){
    document.getElementById('block_items').innerHTML = `<img src="./assets/images/empty-cart.png" width="100px"><br>` + '&#10048;&nbsp; Ваша корзина пуста &nbsp;&#10048;';
    orderSum = 0;
    decorOptionCost = 0;
    orderArray = [];
    document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
    document.getElementById('decoration').innerHTML = '';
    document.getElementById('to-order-page').disabled = true; // блокировка кнопки перехода на страницу оформления заказа
    localStorage.clear();
}
