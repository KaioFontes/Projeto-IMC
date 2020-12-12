//Configurações da calculadora de IMC.


//Função para calcular o IMC.

calcular = () =>{
    let nome = document.getElementById('nome').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let imc = weight / Math.floor(Math.pow(height,2));

    if(imc <= 18.5){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está abaixo do peso.`;
    }else if(imc > 18.5 && imc <= 24.9 ){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está com peso normal.`;
    }else if(imc >= 25 && imc <= 29.9){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está com Sobrepeso.`;
    }else if(imc >= 30 && imc <= 34.9){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está com Obesidade Grau I.`;
    }else if(imc >= 35 && imc <= 39.9){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está com Obesidade Grau II.`;
    }else if(imc >= 40){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é ${imc} e você está com Obesidade Grau III.`;
    }
}







