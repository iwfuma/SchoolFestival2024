function getRandomAccountNumber() {
    let accountNumber = '';

    // 一番左の数字を0以外のランダムな数字に設定
    accountNumber += Math.floor(Math.random() * 9) + 1; // 1から9の数字

    // 残りの7桁をランダムに生成
    for (let i = 1; i < 8; i++) {
        accountNumber += Math.floor(Math.random() * 10); // 0から9の数字を追加
    }
    return accountNumber;
}

document.addEventListener('DOMContentLoaded', () => {
    // ランダムな口座番号を生成
    let accountNumber = getRandomAccountNumber();
    document.getElementById('accountNumber').textContent = accountNumber; // 口座番号を表示する要素に設定
});
