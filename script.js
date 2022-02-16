function increaseDecrease(product, increase, price) {
    const inputValue = document.getElementById(product + "-number");
    const inputNumber = parseInt(inputValue.value);
    if (increase) { // increase == true;
        inputValue.value = inputNumber + 1;
    }
    else if (inputNumber > 0) {
        inputValue.value = inputNumber - 1;
    }
    const phoneTotal = document.getElementById(product + "-total");
    phoneTotal.innerHTML = inputValue.value * price;

    checkOut(); // handler theke ar ekhan theke call kora ekoi kotha arki
};

function checkOut() {
    const subTotal = document.getElementById("sub-total");
    const phoneValue = document.getElementById("phone-number").value;
    const phonePrice = parseInt(phoneValue) * 1219;
    const caseValue = document.getElementById("case-number").value;
    const casePrice = parseInt(caseValue) * 59;
    subTotal.innerText = phonePrice + casePrice;
    // tax
    const taxValue = document.getElementById("tax-amount");
    taxValue.innerText = (subTotal.innerText / 100) * 15;
    // total price
    const total = document.getElementById("total-price");
    total.innerText = parseInt(subTotal.innerText) + parseInt(taxValue.innerText);
};

document.getElementById("phone-plus").addEventListener("click", function () {
    increaseDecrease("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
    increaseDecrease("phone", false, 1219);
});

document.getElementById("case-plus").addEventListener("click", function () {
    increaseDecrease("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
    increaseDecrease("case", false, 59);
});