let prices: (number | string)[] = [1,3,2,2,2,'as'];
prices.push(1);
prices.push('1');

let user: [string, number,boolean]
user = ['maga',15]
//no permite otra definicion
user = [12,'15']

user = [];
user = ['nico'];
user = ['nico',12];
user = ['nico',12, true];


user = ['nico', 12, true]
//destructuración
const [username, age] = user;
