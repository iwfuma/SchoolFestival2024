function startCountdown(seconds) {
    const countdownElement = document.getElementById('sec');

    const interval = setInterval(() => {
        let hours = Math.floor(seconds / 3600); 
        let minutes = Math.floor((seconds % 3600) / 60); 
        let secondsDisplay = seconds % 60; 

        // 時間:分:秒で表示
        countdownElement.textContent = `${hours}時間 ${minutes}分 ${secondsDisplay}秒`;

        seconds--; 

        if (seconds < 0) { // カウントが0になった時
            clearInterval(interval);
            countdownElement.textContent = "0時間 0分 0秒";
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown(21600); // 6時間 = 21600秒
});
