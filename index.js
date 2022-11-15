let json = `[{
    
    "name": "Корзина нежных роз",
    "photo": "././assets/images/beautiful-flower-bouquets-35.jpg",
    "price": "50$",
    "description": "Кустовые розы белого и светло-розового цвета",
    "design": "Плетеная корзина"  
},
    
    
{
    "name": "Ярко-розовые розы",
    "photo": "././assets/images/beautiful-flower-bouquets-37.jpg",
    "price": "35$",
    "description": "Классический букет розовых роз",
    "design": "Лента, упаковочная бумага"  
},

{
   
    "name": "Яркий ароматный букет",
    "photo": "././assets/images/beautiful-flower-bouquets-46.jpg",
    "price": "25$",
    "description": "Композиция гербер, роз, лилий и белых ....",
    "design": "Лента, упаковочная бумага"  
},


{  
    "name": "Чувственная композиция в ярких розово-фиолетовых тонах",
    "photo": "././assets/images/beautiful-flower-bouquets-47.jpg",
    "price": "35$",
    "description": "Розы, фиалки, каллы и белые....",
    "design": "Лента, упаковочная бумага" 


}]`;


document.addEventListener("DOMContentLoaded", function (event) {
    let flowers = JSON.parse(json); 
    console.log(flowers);
    let flowersContent = "";
    
    for (let flower of flowers) {
        flowersContent +=`<div class='flowers'>
        <img src="${flower.photo}"/>
        <h2>${flower.name}</h2>
        <div class='header'><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Стоимость: </span> ${flower.price}</div>
        <div class='header'><span style = "color: rgb(7, 97, 111); font-weight:bold;"> Описание: </span>${flower.description}</div>
        <div class='header'> <span style = "color: rgb(7, 97, 111); font-weight:bold;"> Декор: </span>${flower.design}</div>
       
        <br>
        <button>В корзину</button>
        <br>
        <br>
        </div>`; 

        document.getElementById("flowersContainer").innerHTML = flowersContent;

    }

});


//https://thypix.com/ru/kartinki-krasivyh-buketov-tsvetov/