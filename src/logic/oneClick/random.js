
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('DOMContentLoaded', () => {

    let customerNumber = getRandomInt(10000000, 99999999);
    document.getElementById('customerNumber').textContent = customerNumber;})

    