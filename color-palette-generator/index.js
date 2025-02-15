const colorPicker = document.getElementById('color-picker');
const schemeMode = document.getElementById('scheme-mode');
const colorOptions = document.getElementById('color-options');

const colorDivs = document.querySelectorAll('.colors');
const hexValuePs = document.querySelectorAll('.hex-values');

colorOptions.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(`https://www.thecolorapi.com/id?hex=${colorPicker.value.slice(1)}`)
        .then(res => res.json())
        .then(data => fetch(`https://www.thecolorapi.com/scheme?hex=${data.hex.clean}&format=json&mode=${schemeMode.value}&count=5`))
            .then(res => res.json())
            .then(data => {
                const colorsArr = [];
                for(let color of data.colors) {
                    colorsArr.push(color.hex.value);
                }
                renderColors(colorsArr);
            });
});

const renderColors = (arr) => {
    colorDivs.forEach((div, i) => {
        div.style.backgroundColor = arr[i];
    });
    hexValuePs.forEach((p, i) => {
        p.textContent = arr[i];
    });
}

const rgbToHex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

colorDivs.forEach((div) => {
    div.addEventListener('click', function(e){
        navigator.clipboard.writeText(rgbToHex(e.target.style.backgroundColor));
    });
});

renderColors(['#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3']);