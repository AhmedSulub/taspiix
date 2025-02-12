// selct idname
// let wlcome = document.getElementById("wlcome")
// wlcome.style.backgroundColor = "orange"
// wlcome.style.padding = "10px"

// slecting clasname
// let java = document.getElementsByClassName("java")[0];
// java.style.backgroundColor = "blue"
// java.style.width = "500px"

// select by tagname

// let dom = document.getElementsByTagName("h3")[0];
// dom.style.backgroundColor = "green"
// dom.style.color = "white"
// dom.style.width = "80%"

// qouary selctor

// let soodhawoo = document.querySelector("#soodhawoow")
// soodhawoo.style.color = "grey"
// let moqdishpo = document.querySelector(".moqdisho")
// moqdishpo.style.color = "red"
// let prg = document.querySelector("p")
// prg.style.backgroundColor = "blue"

// asigment1

// const div = document.querySelector("#select");
// const btn = document.querySelector("#btn");
// const btntwo = document.querySelector("#btntwo")

// ad even lisenar

// btn.addEventListener("click", ()=>{
//     div.style.backgroundColor = "green";
//     div.style.width = "300px"
//     div.style.height = "300px"
//     div.style.borderRadius = "10px"
// })
// btntwo.addEventListener("click", ()=>{
//     div.style.backgroundColor = "blueviolet";
//     div.style.width = "200px"
//     div.style.height = "200px"
//     div.style.borderRadius = "10px"
// })

// asigment2
let div = document.querySelector("#guud");
// let divone = document.querySelector("#divone");
// let divdivtwo = document.querySelector("#divtwo");
// let but = document.querySelector("#but")

// div.style.display = "flex"
// div.style.gap = "20px"

// butone.addEventListener("click", ()=>{
   
//     div.style.display = "none"
//     // divone.style.display = "Hidden"
// })
// buttwo.addEventListener("click", ()=>{
//     div.style.display = "flex"
// })

// let divtwo = document.querySelector("#divtwo");
// let divone = document.querySelector("#divone")

// divone.addEventListener("mouseover",()=>{
//     divone.style.backgroundColor = "orange"
// })
// divone.addEventListener("mouseout",()=>{
//     divone.style.backgroundColor = "orangeRed"
// })

// divtwo.addEventListener("mouseover",()=>{
//     divtwo.style.backgroundColor = "orange"
// })
// divtwo.addEventListener("mouseout",()=>{
//     divtwo.style.backgroundColor = "orangeRed"
// })

// key up
// const inpt = document.querySelector("#inpt");
// inpt.addEventListener(("keydown"), (e)=>{
//     alert(e.key)

// })

// textnode
// let h2 = document.querySelector("#hto");
// h2.innerHTML = "magaalo cusub"


// asigment event

// let numone = document.querySelector("#numone")
// let numtwo = document.querySelector("#numtwo")
// let but = document.querySelector("#but")
// let result = document.querySelector("#result")

// let number1 = parseInt(prompt("enter num1"))
// let number2 = parseInt(prompt("enter num2"))
// numone.innerHTML = number1
// numtwo.innerHTML = number2
// but.addEventListener(("click"),()=>{
//     let sum = number1+number2
//     result.textContent = sum
// })




let pargone = document.querySelector("#pargone");
let pargtwo = document.querySelector("#pargtwo");
let pargthree = document.querySelector("#pargthree");
let botone = document.querySelector("#botone");
let result = document.querySelector("#result");



let bodymass = parseInt(prompt("Enter bodymass")); 
result.textContent = bodymass



botone.addEventListener("click", () => {
    if (bodymass < 18) {
     
        pargone.innerHTML = "your weight is UnderWeight";

        pargone.style.fontSize = "2em"
        
    } else if (bodymass >= 18 && bodymass <= 25) {
        pargtwo.innerHTML = "Your Weight is Medium";
          pargtwo.style.fontSize = "2em"
    } else if (bodymass > 25) {
        pargthree.innerHTML = "Your Weight is OverWeight";
          pargthree.style.fontSize = "2em"
    }
});













