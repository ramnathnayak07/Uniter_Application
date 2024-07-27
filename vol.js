function convertVolume() {
    const input = parseFloat(document.getElementById('input').value);
    const inputType = document.getElementById('inputType').value;
    const resultType = document.getElementById('resultType').value;

    const conversionRates = {
        'cubic meter': 1,
        'cubic kilometer': 1e-9,
        'cubic centimeter': 1e+6,
        'cubic millimeter': 1e+9,
        'liter': 1000,
        'milli liter': 1e+6,
        'gallon': 264.172,
        'quart': 1056.69,
        'pint': 2113.38,
        'cup': 4166.67,
        'tablespoon': 67628,
        'teaspoon': 202884,
        'barrel': 6.28981
    };

    // Convert input value to cubic meters first
    const valueInCubicMeters = input / conversionRates[inputType];

    // Convert from cubic meters to the desired output unit
    const result = valueInCubicMeters * conversionRates[resultType];

    document.getElementById('result').value = result;
}

document.getElementById('input').addEventListener('input', convertVolume);
document.getElementById('inputType').addEventListener('change', convertVolume);
document.getElementById('resultType').addEventListener('change', convertVolume);
