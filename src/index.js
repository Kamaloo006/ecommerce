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

document.querySelector('#fullYear').innerHTML = new Date().getFullYear();
