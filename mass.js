function convertMass() {
    const input = parseFloat(document.getElementById('input').value);
    const inputType = document.getElementById('inputType').value;
    const resultType = document.getElementById('resultType').value;
    const conversionRates = {
        kilogram: 1,
        gram: 1000,
        milligram: 1e+6,
        ton: 0.001,
        pound: 2.20462,
        ounce: 35.274,
        carat: 5000,
        amu: 6.022e+26,
        quarter: 0.078736,
        quintal: 0.01,
        grain: 15432.4
    };

    // Convert input value to kilograms first
    const valueInKilograms = input / conversionRates[inputType];

    // Convert from kilograms to the desired output unit
    const result = valueInKilograms * conversionRates[resultType];

    document.getElementById('result').value = result;
}

document.getElementById('input').addEventListener('input', convertMass);
document.getElementById('inputType').addEventListener('change', convertMass);
document.getElementById('resultType').addEventListener('change', convertMass);
