const { circleArea, circleCircumference } = require('./circleArea');

const r = 5;

const area = circleArea(r);
console.log(`Dairenin Alanı: ${area}`);

const circumference = circleCircumference(r);
console.log(`Dairenin Çevresi: ${circumference}`);
