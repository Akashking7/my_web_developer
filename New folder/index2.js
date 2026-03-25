function calculator(a, b, operator) {
    return operator(a, b);
}
function add(x, y) {
    return x - y;
}
console.log(calculator(5,3,add))