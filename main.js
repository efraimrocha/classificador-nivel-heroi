
const name = "El Titan"
let xp = 0;

function calcularNivel(xp){
    if (xp <= 1000){
        return 'Ferro'
    }else if(xp >= 1001 && xp <= 2000){
        return 'Bronze'
    }else if(xp >= 2001 && xp <= 5000){
        return 'Prata Ouro'
    }else if(xp >= 5001 && xp <= 8000){
        return 'Platina Diamante'
    }else if(xp >= 8001 && xp <= 9000){
        return 'Ascendente'
    }else if(xp >= 9001 && xp <= 10000){
        return 'Imortal'
    }else{
        return 'Radiante'
    }
}

console.log(`O Herói de nome ${name} está no nível de ${calcularNivel(500)}`)