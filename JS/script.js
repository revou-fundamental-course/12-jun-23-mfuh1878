const celciusinput = document.getElementById(inputancel);
const fahrenheitinput = document.getElementById(inputanfah);
const kalkulasiinput = document.getElementById(inputankalkulasi);
const inputs= document.getElementsByClassName(inputsection);

for(let i=0; i<inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input",function(e){
        let value = perseFloat(e.target.value);
        switch(e.target.value) {
            case "celcius":
                fahrenheitinput.value = (value*1.8) + 32;
                break;
            case "fahrenheit":
                celciusinput.value = (value-32) / 1.8;
                break;
        }
    });
    }
