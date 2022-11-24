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




document.querySelector("#input_order-form").addEventListener('click', function () {
    swal({
            title: 'Ваш заказ оформлен!',
            text: 'Мы свяжемся с вами для его подтверждения.',
            type: 'success',
            confirmButtonColor: '#0093a2'
        }

    );
    //сбор данных из инпутов в переменную
    let name = document.getElementById('input_name').value;
    let telephon = document.getElementById('input_tel').value;
    let email = document.getElementById('input_email').value;
    let street = document.getElementById('input_street').value;
    let houseNumber = document.getElementById('input_houseNumber').value;
    let building = document.getElementById('input_building').value;
    let apartmentNumber = document.getElementById('input_apartmentNumber').value;
    let comment = document.getElementById('textarea_comment').value;
    let payment;
    if (document.getElementById('bankCard').checked) {
        payment = "банковская карта"
    } else {
        payment = "наличные"
    };
    let newCustomer = new Customer(name, telephon, email, street, houseNumber, building,
        apartmentNumber,
        comment, payment);
    console.log(newCustomer);
});