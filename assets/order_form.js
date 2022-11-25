  //Класс данных о закакзе из формы
class Customer {
    constructor(name, telephon, email, street, houseNumber, building, apartmentNumber, comment, payment) {
        this.name = name;
        this.telephon = telephon;
        this.email = email;
        this.street = street;
        this.houseNumber = houseNumber;
        this.building = building;
        this.apartmentNumber = apartmentNumber;
        this.comment = comment;
        this.payment = payment;
    }
}

const submitButtonID = document.getElementById('input_order-form');
const input_nameID = document.getElementById('input_name');
const input_telID = document.getElementById('input_tel');
const input_emailID = document.getElementById('input_email');
const radio_paymentID = document.querySelectorAll('.radio_payment');
const streetID = document.getElementById('input_street');
const houseID = document.getElementById('input_houseNumber');
const sectionID = document.getElementById('input_building');
const appID = document.getElementById('input_apartmentNumber');
const errors = document.querySelectorAll('.order-form_div-with-error');
let validated;


document.querySelector("#input_order-form").addEventListener('click', function () {
    validated = validateInput();
    if (validated) {
        swal({
            title: 'Ваш заказ оформлен!',
            text: 'Мы свяжемся с вами для его подтверждения.',
            type: 'success',
            confirmButtonColor: '#0093a2'
        }

        );
        //сбор данных из инпутов в переменную
        let name = input_nameID.value;
        let telephon = input_telID.value;
        let email = input_emailID.value;
        let street = streetID.value;
        let houseNumber = houseID.value;
        let building = sectionID.value;
        let apartmentNumber = appID.value;
        let comment = document.getElementById('textarea_comment').value;
        let payment;
        if (document.radio_paymentID.checked) {
            payment = "банковская карта"
        } else {
            payment = "наличные"
        };
        let newCustomer = new Customer(name, telephon, email, street, houseNumber, building,
            apartmentNumber,
            comment, payment);
        console.log(newCustomer);
    }

});

function validateInput(){
    let name = validateName(input_nameID.value);
    let tel = validatePhone(input_telID.value);
    let email = validateEmail(input_emailID.value);
    let add = validateAddress(streetID,houseID,sectionID,appID);
    let pay = validatePayment(radio_paymentID);
    
    return (name && tel && email && add && pay);
}

function validateName(someName){
    if (!someName){
        errors[0].textContent = "Пожалуйста, укажите Ваше имя.";
        return false;
    }
    else if (someName == 0) {
        errors[0].textContent = "Пожалуйста, укажите Ваше имя.";
        return false;
    }
    else if (checkForNumbers(someName)){
        errors[0].textContent = "Имя может содержать только символы алфавита.";
        return false;
    }
    else {
        errors[0].textContent = "";
        return true;
    }
}

function checkForNumbers(someText){
    const regexp =/^[а-яёa-z]+$/i;
    return (!regexp.test(someText.trim()));
}

function validatePhone(somePhone){
    if (!somePhone){
        errors[1].textContent = "Пожалуйста, укажите Ваш номер телефона.";
        return false;
    }
    else if (somePhone == 0) {
        errors[1].textContent = "Пожалуйста, укажите Ваш номер телефона.";
        return false;
    }
    else if (checkPhoneFormat(somePhone)){
        errors[1].textContent = "Введен неверный формат номера телефона.";
        return false;
    }
    else {
        errors[1].textContent = "";
        return true;
    }
}

function checkPhoneFormat(someText){
    const regexp =/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return (!regexp.test(someText));
}

function validateEmail(someEmail){
    if (!someEmail){
        errors[2].textContent = "Пожалуйста, укажите Ваш email.";
        return false;
    }
    else if (someEmail == 0) {
        errors[2].textContent = "Пожалуйста, укажите Ваш email.";
        return false;
    }
    else if (checkEmailFormat(someEmail)){
        errors[2].textContent = "Введен некорректный email.";
        return false;
    }
    else {
        errors[2].textContent = "";
        return true;
    }
}

function checkEmailFormat(someText){
    const regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (!regexp.test(someText));
}

function validateAddress(streetID,houseID,sectionID,appID){
    const regexp_numeric =/^[0-9]+$/;
    const street = streetID.value;
    const house = houseID.value;
    const section = sectionID.value;
    const app = appID.value;
    
    if ((!street) || street==" "){
        errors[3].textContent = "Укажите, пожалуйста, улицу."
        return false;
    }

    if ((!house) || house==" "){
        errors[3].textContent = "Укажите, пожалуйста, номер дома."
        return false;
    }

    if (!regexp_numeric.test(house)){
        errors[3].textContent = "Номер дома может быть только числом."
        return false;
    }

    if ((!section) || section ==" "){
        errors[3].textContent = "Укажите, пожалуйста, корпус, если его нет, поставьте '-'."
        return false;
    }

    if ((!app) || app ==" "){
        errors[3].textContent = "Укажите, пожалуйста, номер квартиры, если его нет, поставьте '-'."
        return false;
    }

    if (!regexp_numeric.test(app)){
        errors[3].textContent = "Номер квартиры может быть только числом."
        return false;
    }

    errors[3].textContent = "";
    return true;
}

function validatePayment(radio){
    let result = false;
    for (let i = 0; i <radio.length; i++){
        if (radio[i].checked) {
            result = true;
            break;
        }
    }
    
    if (!result){
        errors[4].textContent = "Пожалуйста, выберите способо оплаты.";
        return false
    }
    else{
        errors[4].textContent = ""
        return true;
    }
}