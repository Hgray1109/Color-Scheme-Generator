const inputEl = document.getElementById("color-input")
const setColor = document.getElementById("color-scheme")
const btn = document.getElementById("btn")

const colorBarOne = document.getElementById("color-bar-one")
const colorBarTwo =  document.getElementById("color-bar-two")
const colorBarThree =  document.getElementById("color-bar-three")
const colorBarFour =  document.getElementById("color-bar-four")
const colorBarFive =  document.getElementById("color-bar-five")


const hexColorOne = document.getElementById("code-one-footer")
const hexColorTwo = document.getElementById("code-two-footer")
const hexColorThree = document.getElementById("code-three-footer")
const hexColorFour = document.getElementById("code-four-footer")
const hexColorFive = document.getElementById("code-five-footer")



btn.addEventListener("click", function(){
    const color = inputEl.value
    const scheme = setColor.value
    const mainColor = color.substring(1)   
    fetch(`https://www.thecolorapi.com/scheme?hex=${mainColor}&mode=${scheme}&count=5`)
    .then(res => res.json())
    .then(data => {
            
        colorBarOne.style.background  = data.colors[0].hex.value
        colorBarTwo.style.background  = data.colors[1].hex.value
        colorBarThree.style.background  = data.colors[2].hex.value
        colorBarFour.style.background  = data.colors[3].hex.value
        colorBarFive.style.background  = data.colors[4].hex.value
        
        hexColorOne.textContent =  data.colors[0].hex.value
        hexColorTwo.textContent =  data.colors[1].hex.value
        hexColorThree.textContent =  data.colors[2].hex.value
        hexColorFour.textContent =  data.colors[3].hex.value
        hexColorFive.textContent =  data.colors[4].hex.value
        
       
        })
      
})