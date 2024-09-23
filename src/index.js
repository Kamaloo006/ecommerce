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

document.querySelector('#fullYear').innerHTML = new Date().getFullYear();