const fs = require("fs");

// fs.writeFile("message2.txt", "hello from aka", (err) => {
//     if (err) throw err;
//     console.log("the file has been save");              // writefile
// });

fs.readFile("./message.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);                               // readfile
});