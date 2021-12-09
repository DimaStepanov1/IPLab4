function  getNowDateTime(obj, cls) {
    let now = new Date();
    let days = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];
    let months = ["січня","лютого","березня","квітня","травня","червня",
                  "липня","серпня","вересня","жовтня","листопада","грудня"];
    let month = months[now.getMonth()];
    let day = days[now.getDay()];

    let resString = `Дата: ${now.getDate()+" "+month+" "+now.getFullYear()} року <br/>
                     День: ${day} <br/>
                     Час: ${now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()}`;
    let res = document.getElementById("currentDate");
    res.innerHTML = resString;
}