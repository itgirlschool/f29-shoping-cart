const addOut = document.querySelector('.add-out');
const addImageOut = document.querySelector('.add-image-out');
//const totalSum = document.getElementById('sum');

let orderSum; // общая стоимость заказа
let item=0;

let a = document.getElementById('misc'); // checkbox
let decorOptionCost = 0;
let addDecorOption = document.getElementById('add-option-list'); // стоимость упаковки

addDecorOption.onchange = getOptionCost;   // добавление стоимости упаковки к общей стоимости


// функция добавления упаковки
function getOptionCost() {
    orderSum -= decorOptionCost;
    decorOptionCost = +addDecorOption.value;
    //console.log('decorOptionCost: ' + decorOptionCost);
    orderSum += decorOptionCost;
    //console.log('промежуточная сумма: ' + orderSum);
    document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
    /*
        if (a.checked) {
            document.getElementById('add-image-out').innerHTML = '';
            showAdd();
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
        } else {
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
            console.log('сумма2: ' + orderSum);
        }
        //console.log('getOptionCost: ' + orderSum);
    */
};

addOut.addEventListener('click', showAdd); // вывод доп оформления по клику checkbox

// функция вывода доп оформления по клику checkbox
function showAdd(event){
    if (a.checked){
        for (let key in dodatki) {
            let img = document.createElement('img');
            let name = dodatki[key]['name'];  // цена выбранного оформления
            let value = dodatki[key]['value'];  // цена выбранного оформления

            img.setAttribute('data-key', key);
            img.title = name + ': ' + value; // назначение атрибута title
            img.alt = 'Подарок: ' + name + ': ' + value; // назначение атрибута title
            img.src = 'assets/images/' + key + '.png';
            addImageOut.append(img);
            img.after(' ');
        }
        addImageOut.addEventListener('click', pickAddImage); // выбор оформления
        console.log('after add decor' + orderSum);
    } else {
        console.log('Koszt dodatkow' + item);
        console.log('SUM ' + orderSum);
        orderSum -= item;
        item=0;
        document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа

        document.getElementById('add-image-out').innerHTML = '';
        console.log('after delete decor' + orderSum);
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
            //console.log('-decor' + orderSum);
        } else {
            event.target.classList.add('active');
            item+=value;
            orderSum += value;
            document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum; // обновление общей суммы заказа
            //console.log('+decor' + orderSum);
        }
        //return orderSum;
}

/*
// получаем JSON-массив через XML-запрос
let requestURL = './assets/catalogue.json';
let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    //request.responseType = 'json';
    request.send();

    request.onload = function() {
        let jasonCatalogue = request.response;
        let catalogue = JSON.parse(jasonCatalogue);
        console.log(catalogue);
        getItem(catalogue);
    }
*/

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
        getItem(catalogue);
        sumUp(catalogue);
        console.log('начальная стоимость: '+ sumUp(catalogue));
    })
    .catch(error => console.log(error))

// выводим в корзину 0 элемент массива JSON
    function getItem(jsonObj) {
        let itemName = document.createElement('span');
        itemName.innerHTML = 'Название букета: ' + jsonObj[0]["name"];
        document.getElementById('item-name').appendChild(itemName);
    
        let itemPrice = document.createElement('span');
        itemPrice.innerHTML = 'Цена букета: $' + jsonObj[0]["price"];
        document.getElementById('item-price').appendChild(itemPrice);
        //console.log(jsonObj[0]["price"]);
    }

    
// функция суммирования всего заказа с учетом стоимости букета
    function sumUp(jsonObj){
        orderSum = +jsonObj[0]["price"];
        document.getElementById('total-out').innerHTML = 'Сумма: $' + orderSum;
        return orderSum;
    }
