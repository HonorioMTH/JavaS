let cel, far

cel = prompt("Qual valor em Celsius você quer converter? ");

converter (cel, far);

function converter(celsius, fahrenheit) {
    fahrenheit = parseFloat(celsius * 9/5) + parseFloat(32)
    return alert(fahrenheit + "°F")
}