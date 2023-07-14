// 1-create object:
const person = {
    fname: "Ahmed",
    lname: "Hossam",
    age: "20",
    city: "Alex"
}
console.log(person)

///////////////////////////////////////////////
// 2-change obj to json:

const personJson = JSON.stringify(person)
console.log(personJson)

///////////////////////////////////////////////
// 3-store in file:

const fs = require("fs")

// store JSON in file 
fs.writeFileSync("data1.json", personJson)

//fs.writeFileSync("data1.txt",personJson)

///////////////////////////////////////////////
// 4-read file(json):

//const readPersonJson=fs.readFileSync("data1.txt").toString()
//console.log(readPersonJson)
const readPersonJson1 = fs.readFileSync("data1.json").toString()
console.log(readPersonJson1)

///////////////////////////////////////////////
// 5-convert to obj:

const personObj = JSON.parse(personJson)
console.log(personObj)

///////////////////////////////////////////////
// 6-update data to json:
        //  تلقائي(personObj)من ال 
        personObj.fname = "Adel"
        personObj.lname = "Ahmed"
        personObj.age = "40"
        personObj.city = "Cairo"

        console.log(personObj)

        


///////////////////////////////////////////////
// 7-convert obj ( after updating) to json:

const personUpdateJson = JSON.stringify(personObj)
console.log(personUpdateJson)

///////////////////////////////////////////////
// 8-store (personUpdateJson) in file:

fs.writeFileSync("data1.json", personUpdateJson)

fs.writeFileSync("data1.txt", personUpdateJson)




