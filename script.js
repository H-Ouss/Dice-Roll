function play(){
    // .value pour prendre la valeur de l'input
    const numOfDice = document.getElementById("diceRoll").value;
    const resultDice = document.getElementById("diceNumber");
    const imageDice = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0 ; i < numOfDice ; i++){
        const value = Math.floor(Math.random() * 6 + 1);

        values.push(value);
        images.push(`<img src="Dices/${value}.png" alt="dice ${value}">`);
    }

    resultDice.textContent = `Dice ${values.join(', ')}`;
    imageDice.innerHTML = images.join('');
}
