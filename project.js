let value = document.querySelector("#value")
let btnone = document.querySelector("#btnone")
let btntwo = document.querySelector("#btntwo")
let btnthree = document.querySelector("#btnthree")
let anothervalue = document.querySelector("#anothervalue")

let startvalue = 0

btnone.addEventListener("click",()=>{
    startvalue ++
    value.textContent = startvalue
    if(startvalue === 10){
        value.style.color = "red"
    }
    else{
        startvalue == 10 
        value.style.color = "blue"
    }
    // if(startvalue === 10){ 
    //    anothervalue.textContent = "😊"
    // }
    // else if(startvalue === 20){
    //      anothervalue.textContent = "🤣"
    // }
    // else if(startvalue === 30){
    //     anothervalue.textContent = "😎"
    // }
    // else if(startvalue === 40){
    //     anothervalue.textContent = "😎"
    // }
    // else if(startvalue === 50){
    //     anothervalue.textContent = "😎"
    // }
    // else{
    //     value.style.color = "black"
    //     anothervalue.textContent = null
    // }
})
btntwo.addEventListener("click", ()=>{
    startvalue = 0
    value.textContent = startvalue
})

 
btnthree.addEventListener("click", ()=>{
   

    if (startvalue>0){
        startvalue --
        value.textContent = startvalue
        
    }

    if(startvalue === 10){
        value.style.color = "red"
    }
    else{
        startvalue == 10 
        value.style.color = "blue"

    }
})