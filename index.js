var radioTemp = document.getElementsByName("radioTemp");
var inputTemp = document.getElementById("input-temp");
var containerBox = document.querySelector(".container-box");
var btn = document.querySelector(".calcBtn");
var resultado = document.createElement("h2");
resultado.classList = "resultado"

inputTemp.addEventListener("keydown", function(event) {
    
    if (event.key === "Enter") {
        CalcularTemp()
    }

})

function Verificar() {
    if (radioTemp[0].checked || radioTemp[1].checked || radioTemp[2].checked) {
        inputTemp.removeAttribute("disabled");
        btn.removeAttribute("disabled");
    }
}

function CalcularTemp() {
    if (radioTemp[0].checked) {
        var cEmF = converterCemF(inputTemp.value);
        var cEmK = converterCemK(inputTemp.value);
        if (cEmK <= 0) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F9CA;&#x1F976;❄️</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${cEmF} ºF</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${cEmK} K</span>`
        
        } else if (inputTemp.value <= 24) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F976;</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${cEmF} ºF</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${cEmK} K</span>`
        
        } else if (inputTemp.value > 24 && inputTemp.value < 32) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F604;</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${cEmF} ºF</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${cEmK} K</span>`
        
        } else {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F975;</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${cEmF} ºF</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${cEmK} K</span>`
        
        }
    }
    
    if (radioTemp[1].checked) {
        var fEmC = converterFemC(inputTemp.value);
        var fEmK = converterFemK(inputTemp.value);
        if (fEmK == 0) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F9CA;&#x1F976;❄️</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${fEmC} ºC</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${fEmF} K</span>`
        
        } else if (fEmC <= 24) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F976;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${fEmC} ºC</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${fEmK} K</span>`
        
        } else if (fEmC > 24 && fEmC < 32) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F604;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${fEmC} ºC</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${fEmK} K</span>`
        
        } else {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F975;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${fEmC} ºC</span><br><span style="color: rgb(121, 0, 0);">Kelvin: ${fEmK} K</span>`
        
        }
    }

    if (radioTemp[2].checked) {
        var kEmC = converterKemC(inputTemp.value);
        var kEmF = converterKemF(inputTemp.value);
        if (inputTemp.value == 0) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F9CA;&#x1F976;❄️</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${kEmC} ºC</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${kEmF} ºF</span>`
        
        }else if (kEmC <= 24) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F976;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${kEmC} ºC</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${kEmF} ºF</span>`
        
        } else if (kEmC > 24 && kEmC < 32) {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F604;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${kEmC} ºC</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${kEmF} ºF</span>`
        
        } else {

            containerBox.appendChild(resultado);
            resultado.innerHTML = `<span>&#x1F975;</span><br><span style="color: rgb(0, 121, 0);">Celsius: ${kEmC} ºC</span><br><span style="color: rgb(0, 0, 121);">Fahrenheit: ${kEmF} ºF</span>`
        
        }
    }

}


function converterCemF (c) {
    var f = ((Number(c) * (9 / 5)) + 32).toFixed(2);
    return f
}
function converterCemK (c) {
    var k = (Number(c) + 273.15).toFixed(2);
    return k
}

function converterFemK (f) {
    var k = ((Number(f) - 32) * (5 / 9) + 273.15).toFixed(2);
    return k
}
function converterFemC (f) {
    var c = ((Number(f) - 32) * (5 / 9)).toFixed(2);
    return c
}

function converterKemC (k) {
    var c = (Number(k) - 273.15).toFixed(2)
    return c
}
function converterKemF (k) {
    var f = ((Number(k) - 273.15) * (9 / 5) + 32).toFixed(2);
    return f
}