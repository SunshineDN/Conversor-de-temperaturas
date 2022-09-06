function calcularTemp() {
    var farh = document.querySelector("input#farh");
    var kelvin = document.querySelector("input#kelvin");
    var celsius = document.querySelector("input#celsius");

    farh.value = converterCemF(celsius.value);
    kelvin.value = converterCemK(celsius.value);
}

function converterCemF (c) {
    var f = ((Number(c) * (9 / 5)) + 32).toFixed(2);
    return f
}

function converterCemK (c) {
    var k = (Number(c) + 273.15).toFixed(2);
    return k
}

/* function converterFemK (f) {
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
    var f = ((Number(k) - 273.15) * (9 / 5) + 32).toFixed(2)
} */