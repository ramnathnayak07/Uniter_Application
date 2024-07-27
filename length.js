function convertLength() {
    const input = parseFloat(document.getElementById('input').value);
    const inputType = document.getElementById('inputType').value;
    const resultType = document.getElementById('resultType').value;
    const conversionRates = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1e+6,
        nanometer: 1e+9,
        decimeter: 10,
        mile: 0.000621371,
        inch: 39.3701,
        yard: 1.09361,
        foot: 3.28084,
        'light-Year': 1.057e-16,
        terameter: 1e-12,
        parsec: 3.24078e-17,
        'astronomical Unit': 6.68459e-12,
        'nautical Mile': 0.000539957,
        fermi: 1e+15
    };

    // Convert input value to meters first
    const valueInMeters = input / conversionRates[inputType];

    // Convert from meters to the desired output unit
    const result = valueInMeters * conversionRates[resultType];

    document.getElementById('result').value = result;
}

document.getElementById('input').addEventListener('input', convertLength);
document.getElementById('inputType').addEventListener('change', convertLength);
document.getElementById('resultType').addEventListener('change', convertLength);
