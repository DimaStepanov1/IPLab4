function getDaysAgo() {
    let date = new Date();
    let substr = Number(document.getElementById("daysAgo").value);
    if(substr>0||substr<0)
        date.setDate(date.getDate() + substr);
    alert(date);
}