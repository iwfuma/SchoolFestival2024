function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    // 乱数生成による支払い金額を設定（1000円から50000円の範囲）
    let paymentAmount = getRandomInt(10, 500) * 32000; 
    document.getElementById('paymentAmount').textContent = paymentAmount.toLocaleString();
});

