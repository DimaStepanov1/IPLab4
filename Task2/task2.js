function  getNowDay() {
    let now = new Date();
    let day = now.getDay();
    let dayInfo = {
        dayNumber: day,
        dayName: ""
    };
    let days = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];

    dayInfo.dayName = days[day];
    if(day === 0)
        dayInfo.dayNumber = 7;

    let resString = `Номер дня: ${dayInfo.dayNumber}<br/>
                     Назва дня: ${dayInfo.dayName}`;
    let res = document.getElementById("currentDay");
    res.innerHTML = resString;
}