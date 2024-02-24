var table = document.querySelector('.resume-table');
var button = document.getElementById('colorButton');
var originalColor = table.style.backgroundColor;
var originalFontColor = table.style.color;
var isColorChanged = false;

button.addEventListener('click', function() {
    if (isColorChanged) {
        table.style.backgroundColor = originalColor;
        table.style.color = originalFontColor;
        isColorChanged = false;
    } else {
        table.style.backgroundColor = '#5A5A5A';
        table.style.color = 'yellow';
        isColorChanged = true;
    }
});