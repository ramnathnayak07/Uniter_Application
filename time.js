function convertTime() {
    const input = parseFloat(document.getElementById('input').value);
    const inputType = document.getElementById('inputType').value;
    const resultType = document.getElementById('resultType').value;
    const conversionRates = {
        second: 1,
        millisecond: 1e+3,
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / (30 * 86400),
        year: 1 / (365 * 86400),
        microsecond: 1e+6,
        shake: 1e+8,
        septennial: 1 / (7 * 365 * 86400)
    };

    // Convert input value to seconds first
    const valueInSeconds = input / conversionRates[inputType];

    // Convert from seconds to the desired output unit
    const result = valueInSeconds * conversionRates[resultType];

    document.getElementById('result').value = result;
}

document.getElementById('input').addEventListener('input', convertTime);
document.getElementById('inputType').addEventListener('change', convertTime);
document.getElementById('resultType').addEventListener('change', convertTime);
