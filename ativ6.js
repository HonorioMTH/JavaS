let age

age = prompt("Qual a sua idade? ")

if(age >= 5 && age <= 7){
    alert("Você ficará no infantil A ")
}else if(age >= 8 && age <= 11){
    alert("Você ficará no infantil B")
}else if(age == 12 || age == 13){
    alert("Você ficará no grupo Juvenil A")
}else if(age >= 14 && age <= 17){
    alert("Você ficará no juvenil B") 
}else if(age >= 18){
    alert("Você ficará no grupo de adultos")
}