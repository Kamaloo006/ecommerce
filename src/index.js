window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle")
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min'

// const tooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');
// const tooltpList = [...tooltip].map(tooltipTrigger => new bootstrap.Tooltip(tooltipTrigger))

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((item) => new bootstrap.Tooltip(item));

let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        alert("تم إضافة المنتج للعربة")
    })
})
document.querySelectorAll(".size-option input[type='radio']").forEach((item) => {
    item.addEventListener("change", () => {
        document.querySelectorAll(".size-option").forEach((i) => i.classList.remove("active"));
        item.parentNode.parentNode.classList.add("active");
    })
})
document.querySelectorAll(".color-option input[type='radio']").forEach((item) => {
    item.addEventListener("change", () => {
        document.querySelectorAll(".color-option").forEach((i) => i.classList.remove("active"));
        item.parentNode.parentNode.classList.add("active");
    })
})


let totalPrice = document.querySelector("#total-price-all");
let allPrices = document.querySelectorAll(".total-price-for-product");


document.querySelectorAll("[data-product-select]").forEach((i) => {
    i.addEventListener("change", () => {
        const newQuantity = i.value;
        const parent = i.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute("data-product-price");
        const totalPriceForProduct = pricePerUnit * newQuantity;
        parent.querySelector(".total-price-for-product").innerHTML = totalPriceForProduct + "$";
        totalPrice.innerHTML = +allPrices[0].innerHTML.slice(0, allPrices[0].innerHTML.length - 1) + +allPrices[1].innerText.slice(0, allPrices[1].innerHTML.length - 1)
    })
})

let deleteBtn = document.querySelectorAll(".delete-btn");
deleteBtn.forEach((btn) => {

    btn.addEventListener("click", function () {
        let deletedRow = btn.parentElement.parentElement;
        let deletedPrice = deletedRow.children[deletedRow.children.length - 2].innerHTML;
        totalPrice.innerHTML = Number(totalPrice.innerHTML) - (Number(deletedPrice.slice(0, deletedPrice.length - 1)));
        deletedRow.remove();
    })
});


const citiesByCountry = {
    sa: ['الرياض', 'جدة'],
    sy: ['دمشق', 'حلب', 'حمص'],
    eg: ['القاهرة', 'الاسكندرية'],
    jo: ['عمان', 'الزرقاء']
}

document.querySelectorAll("select[name='country']").forEach((item) => {
    item.addEventListener("change", () => {
        let country = item.value;
        let cities = citiesByCountry[country];

        document.querySelectorAll("#payment-cities option").forEach((city) => {
            city.remove();
        })

        let firstOption = document.createElement("option");
        firstOption.appendChild(document.createTextNode("اختر مدينة"))
        firstOption.setAttribute("value", "");
        firstOption.setAttribute('disabled', "true")
        firstOption.setAttribute('selected', "true")
        let cityOptions = document.getElementById("payment-cities")
        cityOptions.appendChild(firstOption);

        cities.forEach((c) => {
            let newOption = document.createElement("option");
            newOption.appendChild(document.createTextNode(c));
            newOption.setAttribute("value", c);
            cityOptions.appendChild(newOption)
        })

    })
})


document.querySelectorAll("#form-checkout input[name='payment-method']").forEach((i) => {
    i.addEventListener("change", () => {
        let paymentMethod = i.value;
        let creditCardInputs = document.querySelectorAll("#credit-card-info input");

        if (paymentMethod === "on_delivery") {
            creditCardInputs.forEach((input) => input.style.display = "none")
        }
        else {
            creditCardInputs.forEach((input) => input.style.display = "block")
        }
    })
})

let selectQuantity = document.querySelector(".product-quantity select");
let itemPrice = document.querySelector("#form-product-selection .price.large");
selectQuantity.addEventListener('change', (e) => {
    itemPrice.innerHTML = 35 * e.target.value + "$";
})






document.querySelector('#fullYear').innerHTML = new Date().getFullYear();