const apiKey = 'AIzaSyDOGkoVcMjmsvWRkPmOmylso0Nl26dYgSg';
const baseUrl = 'https://www.googleapis.com/webfonts/v1/webfonts?key=' + apiKey;

const textInput = document.getElementById('text');
const fontFamilySelect = document.getElementById('font-family');
const fontStyleSelect = document.getElementById('font-style');
const resultDiv = document.getElementById('result');
const head = document.head;
let resultParagraph = null;
let downloadLink = null;

const loadFonts = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    data.items.forEach(font => {
        const option = document.createElement('option');
        option.value = font.family;
        option.textContent = font.family;
        fontFamilySelect.appendChild(option);
    });
};

const loadFontDetails = async (fontFamily) => {
    const response = await fetch(`${baseUrl}&family=${fontFamily}`);
    const data = await response.json();

    fontStyleSelect.innerHTML = '';
    data.items[0].variants.forEach(variant => {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        fontStyleSelect.appendChild(option);
    });

    const subsets = data.items[0].subsets;
    if (!resultParagraph) {
        resultParagraph = document.createElement('p');
        resultDiv.appendChild(resultParagraph);
    }
    resultParagraph.textContent = `Поддерживаемые алфавиты: ${subsets.join(', ')}`;

    if (downloadLink) {
        downloadLink.href = data.items[0].menu;
    } else {
        downloadLink = document.createElement('a');
        downloadLink.href = data.items[0].menu;
        downloadLink.textContent = 'Скачать шрифт';
        resultDiv.appendChild(downloadLink);
    }

    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css?family=${fontFamily}`;
    link.rel = 'stylesheet';
    head.appendChild(link);
};

const displayText = (fontFamily, fontStyle) => {
    resultParagraph.innerHTML = `Текст со шрифтом ${fontFamily} и начертанием ${fontStyle}:`;
    const p = document.createElement('p');
    p.style.fontFamily = fontFamily;
    p.style.fontStyle = fontStyle;
    p.textContent = textInput.value;
    p.id = 'textOutput';
    resultParagraph.appendChild(p);
};

window.onload = () => {
    loadFonts();

    fontFamilySelect.addEventListener('change', (e) => {
        loadFontDetails(e.target.value);
    });

    fontStyleSelect.addEventListener('change', (e) => {
        displayText(fontFamilySelect.value, e.target.value);
    });

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        displayText(fontFamilySelect.value, fontStyleSelect.value);
    });
};