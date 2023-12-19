const fs = require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{//readFile is asynchronous 
    console.log(err,data)
})//this is like multi threding . bcz first we get o/p of line 7

console.log("Finished Reading file")

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())//this is like single theading (nodejs intensally block)

// console.log("Finished Sync reading file")

// fs.writeFile('file2.txt',"This is data ",()=>{
//     console.log("Written to the file")
// })

// console.log("Finished Writing file")


 b=fs.writeFileSync('file2.txt',"This is new data ");
console.log(b)
console.log("Finished reading file");