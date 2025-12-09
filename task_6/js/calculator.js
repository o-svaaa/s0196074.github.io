const ServicePrice = {
    SKI:   3000,
    SNOWBOARD:  5000,
    SLEDGE: 1000
};

const SkyPrice = {
    SOFT:   0,
    MEDIUM:  500,
    HARD: 1000
};


function display() {
    const serviceTypes = document.getElementsByName("serviceType");
    serviceTypes.forEach(function(serviceType) {
        serviceType.addEventListener('change', function (event) {
            document.getElementById("skyTypeId").classList.add("d-none");
            document.getElementById("withEquipmentId").classList.add("d-none");
            if (serviceType.value === "SKI") {
                document.getElementById("skyTypeId").classList.remove("d-none");

            } else if (serviceType.value === "SNOWBOARD") {
                document.getElementById("withEquipmentId").classList.remove("d-none");
            }
        });
    });
}


function count() {
    let serviceType
    document.getElementsByName("serviceType").forEach(function(_serviceType) {
        if (_serviceType.checked === true) {
            serviceType = _serviceType;
        }
    })
    let quantity = document.getElementsByName("quantity")[0];
    let result = document.getElementById("result");
    let skyType = document.getElementsByName("skyType")[0];
    let withEquipment = document.getElementsByName("withEquipment")[0];

    let regex = /^\d+$/;
    if (quantity.value === "" || !regex.test(quantity.value) || parseInt(quantity.value) <= 0) {
        result.innerHTML = "Введите корректное количество!";
        return false;
    }
    let _serviceType = ServicePrice[serviceType.value];
    let _quantity = parseInt(quantity.value);
    let total = _serviceType * _quantity;

    total += (serviceType.value === "SKI") ? SkyPrice[skyType.value] * _quantity : 0;
    total += (serviceType.value === "SNOWBOARD" && withEquipment.checked) ? _quantity * 2000 : 0;

    result.innerHTML = "Стоимость заказа: " + total + " руб.";
    return true;
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByName("serviceType").forEach(function (item) {
        item.addEventListener('change', count)
    });
    document.getElementsByName("quantity")[0].addEventListener('input', count);
    if(document.getElementsByName("skyType")[0])
        document.getElementsByName("skyType")[0].addEventListener('change', count);

    if(document.getElementById("withEquipmentId"))
        document.getElementsByName("withEquipment")[0].addEventListener('change', count);

    display();
    count();
});