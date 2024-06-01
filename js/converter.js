document.addEventListener("DOMContentLoaded", function () {
    const conversionFactors = {
        px: { px: 1, cm: 0.0264583, mm: 0.264583, in: 0.0104167, pt: 0.75 },
        cm: { px: 37.7952756, cm: 1, mm: 10, in: 0.393700787, pt: 28.3464567 },
        mm: { px: 3.77952756, cm: 0.1, mm: 1, in: 0.0393700787, pt: 2.83464567 },
        in: { px: 96, cm: 2.54, mm: 25.4, in: 1, pt: 72 },
        pt: { px: 1.33333333, cm: 0.0352777778, mm: 0.352777778, in: 0.0138888889, pt: 1 }
    };

    function convertUnits() {
        const value = parseFloat(document.getElementById('value').value);
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;

        if (isNaN(value) || fromUnit === toUnit || value < 0) {
            document.getElementById('result').innerHTML = 'Введите положительное значение и выберите разные единицы измерения';
            return;
        }

        const convertedValue = value * conversionFactors[fromUnit][toUnit];
        document.getElementById('result').innerHTML = `${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`;
    }

    document.getElementById('converter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        convertUnits();
    });
})