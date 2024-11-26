function getColors(){
const vetorCores = []

for(let i = 1; i <= 148; i++){ 
const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase()
vetorCores.push(colorName)
}
return vetorCores
}

function getRandomColors(numColors = 10) {
    const colors = getColors(); 
    const randomColors = [];

  
    if (colors.length < numColors) {
        console.log("Número de cores solicitadas maior do que o disponível.");
        return colors;  
    }

   
    while (randomColors.length < numColors) {
        const randomIndex = Math.floor(Math.random() * colors.length);  
        const color = colors[randomIndex];

       
        if (!randomColors.includes(color)) {
            randomColors.push(color);
        }
    }

    return randomColors;
}

console.log(getRandomColors(10));


function getRandomColorFromSelected() {
    const randomColors = getRandomColors(10); 
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)]; 

    console.log("Cor aleatória selecionada: " + randomColor);
}
getRandomColorFromSelected();
