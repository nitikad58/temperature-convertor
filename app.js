const celciusInput= document.querySelector('#celcius > input');
const fahrenheitInput= document.querySelector('#fahrenheit > input');
const kelvinInput= document.querySelector('#kelvin > input');

function roundNum(num){
    return Math.round(num*1000)/1000;
}

function fromCelcius(){
   
    const cTemp = parseFloat(celciusInput.value);
    const fTemp =(cTemp*(9/5)) +32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fromFahrenheit(){
   
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp-32)*(5/9);
    const kTemp = (fTemp+ 459.67)*5/9;
    celciusInput.value= roundNum(cTemp);
    kelvinInput.value= roundNum(kTemp);
}

function fromKelvin(){
   
    const kTemp = parseFloat(kelvinInput.value);
    const fTemp = 9/5*(kTemp-273) + 32;
    const cTemp = kTemp-273.15;
    fahrenheitInput.value= roundNum(fTemp);
    celciusInput.value= roundNum(cTemp);
}

function main(){
celciusInput.addEventListener('input',fromCelcius);
fahrenheitInput.addEventListener('input',fromFahrenheit);
kelvinInput.addEventListener('input', fromKelvin);
}

main();