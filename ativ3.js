let cel, fah 

fah = prompt("Digite o valor em fahrenheit que você deseja converter para celsius: ")

converter(cel, fah);

function converter(celsius, fahrenheit) {
    celsius = parseFloat(fahrenheit * 5/9) - parseFloat(32)
    return alert(celsius.toFixed(1) + "°C")
}