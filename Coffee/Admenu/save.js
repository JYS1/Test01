var names = [];
var prices = [];

var nameInput = document.getElementById("name");
var priceInput = document.getElementById("price");

var show = document.getElementById("display");

function insert() {
    names.push(nameInput.value);
    prices.push(priceInput.value);

    clearAndShow();
}
function clearAndShow() {
    nameInput.value = "";
    priceInput.value = "";

    //show
    show.innerHTML = "";
    show.innerHTML += "name: " + names.join(", ") + "<br>";
    show.innerHTML += "price: " + prices.join(", ");
}
