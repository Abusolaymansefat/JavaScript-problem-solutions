// function removeDuplicates(arr){
//     return [...new Set(arr)]
// }

const { useEffect } = require("react")

// console.log(removeDuplicates([1,2,3,2,3,4,4,5,5]))

// function reverseString(arr){
//     return arr. split("").reverse().join("")
// }

// console.log(reverseString('hello'))
// let x = 10;
// (function() {
//    console.log(x);
//    let x = 20;
// })();
console.log(foo)
var foo ="hello "
console.log(foo)

app.get("data", async (req,res) => {
    const result = fetch ("httpy://api.exmple.com/data")
    res.send(await result.json())
})

app.use((req, res, next)=> {
    console.log("Request received")
})

function sum(...numbers, extra){
    return numbers.reduce((acc, num) => acc +num, 0)+ extra
}
function MYComponent(){
    const inputRef = useRef()
    useEffect(() => {
inputRef.current.focus()
    }, [])
    return <input/>
}

<div onClick="console.log('div clicked')">
<button onClick="console.log('buttonclicked')">click me</button>

</div>

console.log(1 +"2" +3)

function fetchData(){
    let data;
    fetch("httpy://api.exmple.com/data")
    .then(response => response.json())
    .then(json => data = json)
    return data
}

const a = [1,2,3]
const b = a
b.push(4)
console.log(a)

let x = 1
let y = 2
x = x+y++
console.log(x,y)

let x = [1,2,3]
let y = [...x]
y[0] = 4
console.log(x[0] , y[0])

const numbers = [1, 2,3]
numbers[10] = 10
console.log(numbers.length)