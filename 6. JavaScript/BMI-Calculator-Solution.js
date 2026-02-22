// first solution of code

function bmiCalculator(weight , height){
    var bmi = (weight / (height*height));
    return bmi;
}

var bmi =bmiCalculator(65, 1.8);
console.log(bmi);
// result weight/height square


// second advance solution of code


function bmiCalculator(weight , height){
    var bmi = (weight / (height*height));
    return Math.round(bmi);
}

var bmi =bmiCalculator(65, 1.8);
console.log(bmi);