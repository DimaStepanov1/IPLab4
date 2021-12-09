function getLastDay() {
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    if(month>12)
        month=12;

    let date = new Date(year,month,1);
    date.setDate(date.getDate() - 1);
    alert(date.getDate());
}