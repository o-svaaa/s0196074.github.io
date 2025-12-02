function count() {
    let p = document.getElementsByName("products")[0];
    let q = document.getElementsByName("quantity")[0];
    let r = document.getElementById("result");

    let regex = /^\d+$/;
    if (q.value === "" || !regex.test(q.value) || parseInt(q.value) <= 0) {
        r.innerHTML = "Введите корректное количество!";
        return false;
    } else {
        let price = parseInt(p.value);
        let quantity = parseInt(q.value);
        let total = price * quantity;

        r.innerHTML = "Стоимость заказа: " + total + " руб.";
        return true;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById("button1");
    button.addEventListener("click", count);
});