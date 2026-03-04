const abc = {};
abc.key = "akash";
const abc2 = { ...abc };

abc2.key = "temp";

console.log(abc.key)