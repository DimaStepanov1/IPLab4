function getNowTimeInfo() {
    let now = new Date();
    let nowTimeInfo = {
        secondsStart: 0,
        secondsFinish:0
    };
    nowTimeInfo.secondsStart = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    nowTimeInfo.secondsFinish = 24 * 3600 - nowTimeInfo.secondsStart;

    alert(`Секунд з початку дня: ${nowTimeInfo.secondsStart}\n`+
          `Секунд до наступного дня: ${nowTimeInfo.secondsFinish}`);
}