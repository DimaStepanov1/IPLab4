let date1 = new Date(2019,7,5);
let date2 = new Date(2020,7,5);
let res = Math.floor(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 365.2425));
alert(`Між датами ${res} повних років`);