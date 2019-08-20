var coffee_name = [];
var coffee_price = [];
var coffee_photo = [];

var nameInput = document.getElementById("coffee_name");
var priceInput = document.getElementById("coffee_price");
var photoInput = document.getElementById("coffee_photo");




function insert() {
    coffee_name.push(nameInput.value);
    coffee_price.push(priceInput.value);
    coffee_photo.push(photoInput.value);

    coffee_name.push(nameInput.innerHTML);
    coffee_price.push(priceInput.innerHTML);
    coffee_photo.push(photoInput.innerHTML);
}
