// 日付を取得してフォーマットする関数
function formatDate(date) {
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2); // 月を2桁に
    let day = ('0' + date.getDate()).slice(-2); // 日を2桁に
    let hours = ('0' + date.getHours()).slice(-2); // 時を2桁に
    let minutes = ('0' + date.getMinutes()).slice(-2); // 分を2桁に
    let seconds = ('0' + date.getSeconds()).slice(-2); // 秒を2桁に
    return `${year}年${month}月${day}日 ${hours}時${minutes}分${seconds}秒`;
}

// ページ読み込み時に登録日時を表示
document.addEventListener('DOMContentLoaded', () => {
    // 登録日時を取得して表示
    let registrationDate = new Date();
    document.getElementById('registrationDate').textContent = formatDate(registrationDate);
});

