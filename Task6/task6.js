let year = +prompt('Рік', '');
let half;
if (year % 100 <= 50) {
    half =1;
}
else {
    half =2;
}
if (year % 100 == 0)
{
    half =2;
}
let century = Math.ceil(year/100);
let millennium = Math.ceil((year/ 1000));
alert(`${year} рік  належить до ${half} половини ${century} століття ${millennium} тисячоліття`);